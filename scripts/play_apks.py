"""APK de descarga directa del portfolio: lista las versiones de cada app en Play y descarga el APK universal
firmado por Google Play (la misma firma que la versión de la tienda), que es el que va en la release "apks".

uso: python scripts/play_apks.py <clave.json> list
     python scripts/play_apks.py <clave.json> get <paquete> <versionCode> <salida.apk>
(<clave.json>: la cuenta de servicio de Play, p. ej. ../counters/credentials/play-service-account.json; necesita requests y cryptography)
"""
import base64, json, sys, time
import requests
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding

API = "https://androidpublisher.googleapis.com/androidpublisher/v3/applications"
PKGS = ["counters", "worca", "retobox", "liftlog", "isaacguide", "estanteria", "puntero"]


def token(keyfile):
    k = json.load(open(keyfile, encoding="utf-8"))
    b64 = lambda b: base64.urlsafe_b64encode(b).rstrip(b"=")
    now = int(time.time())
    head = b64(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    claims = b64(json.dumps({"iss": k["client_email"], "scope": "https://www.googleapis.com/auth/androidpublisher",
                             "aud": k["token_uri"], "iat": now, "exp": now + 3600}).encode())
    priv = serialization.load_pem_private_key(k["private_key"].encode(), None)
    sig = b64(priv.sign(head + b"." + claims, padding.PKCS1v15(), hashes.SHA256()))
    r = requests.post(k["token_uri"], data={"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
                                             "assertion": (head + b"." + claims + b"." + sig).decode()})
    r.raise_for_status()
    return r.json()["access_token"]


def main():
    s = requests.Session()
    s.headers["Authorization"] = "Bearer " + token(sys.argv[1])
    if sys.argv[2] == "list":
        for p in PKGS:
            pkg = f"com.ikerlorente11.{p}"
            r = s.post(f"{API}/{pkg}/edits")
            if not r.ok:
                print(pkg, "SIN ACCESO", r.status_code, r.text[:150]); continue
            eid = r.json()["id"]
            tracks = s.get(f"{API}/{pkg}/edits/{eid}/tracks").json().get("tracks", [])
            s.delete(f"{API}/{pkg}/edits/{eid}")
            for t in tracks:
                for rel in t.get("releases", []):
                    print(pkg, t["track"], rel.get("status"), rel.get("name"), rel.get("versionCodes"))
            if not tracks:
                print(pkg, "sin tracks")
    else:
        pkg, vc, out = sys.argv[3], sys.argv[4], sys.argv[5]
        r = s.get(f"{API}/{pkg}/generatedApks/{vc}")
        r.raise_for_status()
        data = r.json()
        uni = [g["generatedUniversalApk"] for g in data.get("generatedApks", []) if "generatedUniversalApk" in g]
        if not uni:
            print("sin APK universal:", json.dumps(data)[:400]); sys.exit(1)
        did = uni[0]["downloadId"]
        r = s.get(f"{API}/{pkg}/generatedApks/{vc}/downloads/{did}:download", params={"alt": "media"}, stream=True)
        r.raise_for_status()
        with open(out, "wb") as f:
            for c in r.iter_content(1 << 20):
                f.write(c)
        print("ok", out)


main()
