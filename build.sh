#!/usr/bin/env bash
set -euo pipefail

# ── Opciones ──────────────────────────────────────────────────────────────────
TARGET="${1:-all}"   # all | dev | prod

check_port() {
    local port="$1"
    if ss -tlnp 2>/dev/null | grep -q ":${port} "; then
        echo ""
        echo "✗  El puerto $port sigue ocupado por un proceso docker-proxy huérfano."
        echo "   Solución: sudo systemctl restart docker && ./build.sh ${TARGET}"
        exit 1
    fi
}

cleanup() {
    local service="$1"
    local container="$2"
    local port="$3"
    if docker inspect "$container" &>/dev/null; then
        echo "   Limpiando contenedor anterior ($container)..."
        docker rm -f "$container" &>/dev/null || true
    fi
    check_port "$port"
}

deploy_prod() {
    cleanup portfolio-prod iker_portfolio_prod 8085
    echo ""
    echo "▶  Desplegando portfolio-prod en el puerto 8085..."
    docker compose up -d --build portfolio-prod
    echo "✓  portfolio-prod listo → http://localhost:8085"
    echo "   Watch interno activo: detecta cambios en src/ y public/ cada 3s y reconstruye"
}

watch_dev() {
    cleanup portfolio iker_portfolio 8084
    echo ""
    echo "▶  Iniciando portfolio (dev) en el puerto 8084 con hot reload..."
    docker compose up -d --build portfolio
    echo "✓  portfolio listo → http://localhost:8084"
    echo "   Hot reload activo: los cambios en src/ y public/ se reflejan automáticamente"
}

case "$TARGET" in
    dev)
        watch_dev
        ;;
    prod)
        deploy_prod
        echo ""
        echo "Containers activos:"
        docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"
        ;;
    all)
        deploy_prod
        watch_dev
        echo ""
        echo "Containers activos:"
        docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"
        ;;
    *)
        echo "Uso: ./build.sh [all|dev|prod]"
        echo "  all  → despliega prod (8085) y arranca dev con hot reload (8084)  [por defecto]"
        echo "  dev  → solo container de desarrollo con hot reload (8084)"
        echo "  prod → solo container de producción (8085)"
        exit 1
        ;;
esac
