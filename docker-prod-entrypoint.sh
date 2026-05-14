#!/bin/sh
set -e

WEB_ROOT=/usr/share/nginx/html

do_build() {
    echo "[prod] Construyendo..."
    if npm run build; then
        cp -r dist/. "$WEB_ROOT/"
        echo "[prod] Build completado ✓"
    else
        echo "[prod] Build fallido ✗ — se mantiene la versión anterior"
    fi
}

# Build inicial
do_build

# Arrancar nginx en background
nginx -g "daemon off;" &
NGINX_PID=$!
trap "kill $NGINX_PID 2>/dev/null; exit 0" TERM INT

echo "[prod] Servidor listo → http://localhost"
echo "[prod] Vigilando cambios en src/ y public/ (polling cada 3s)..."

prev_hash=""
while true; do
    sleep 3
    curr_hash=$(find src public -type f 2>/dev/null | sort | xargs md5sum 2>/dev/null | md5sum | awk '{print $1}')
    if [ -n "$prev_hash" ] && [ "$curr_hash" != "$prev_hash" ]; then
        echo "[prod] Cambios detectados, reconstruyendo..."
        do_build
    fi
    prev_hash="$curr_hash"
done
