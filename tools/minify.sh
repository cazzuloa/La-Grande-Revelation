#!/bin/sh
# Génère les feuilles minifiées (css/*.min.css) à partir des sources commentées (css/*.css).
# Nécessite Node.js et npx : l'outil Lightning CSS est téléchargé au premier usage.
# À relancer après toute modification d'une feuille de style.
# Usage : sh tools/minify.sh

set -e

cd "$(dirname "$0")/.." || exit 1

for src in css/*.css; do
    case "$src" in
        *.min.css) continue ;;
    esac

    dest="${src%.css}.min.css"
    npx --yes lightningcss-cli "$src" --minify -o "$dest"
    echo "$src -> $dest"
done
