#!/usr/bin/env bash
set -euo pipefail

# ── Opciones ──────────────────────────────────────────────────────────────────
TARGET="${1:-all}"   # all | dev | prod

deploy() {
    local service="$1"
    local port="$2"
    echo ""
    echo "▶  Desplegando $service en el puerto $port..."
    docker compose up -d --build "$service"
    echo "✓  $service listo → http://localhost:$port"
}

case "$TARGET" in
    dev)
        deploy portfolio 8080
        ;;
    prod)
        deploy portfolio-prod 8085
        ;;
    all)
        deploy portfolio 8080
        deploy portfolio-prod 8085
        ;;
    *)
        echo "Uso: ./build.sh [all|dev|prod]"
        echo "  all  → despliega dev (8080) y prod (8085)  [por defecto]"
        echo "  dev  → solo container de desarrollo (8080)"
        echo "  prod → solo container de producción (8085)"
        exit 1
        ;;
esac

echo ""
echo "Containers activos:"
docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"
