#!/usr/bin/env bash
#
# assemble-video.sh — Assemble les GIFs de La Grande Révélation en une vidéo MP4.
#
# Usage :
#   bash tools/assemble-video.sh            # assemble les 8 GIFs + voix off si présente
#   bash tools/assemble-video.sh --silent  # assemble sans audio
#
# Prérequis : ffmpeg, ffprobe
# Entrées  : assets/videos/clips/{1..8}.gif  (et optionnellement voix_off_24s.mp3)
# Sortie   : assets/videos/evidence.mp4

set -euo pipefail

# --- Configuration -----------------------------------------------------------
CLIPS_DIR="assets/videos/clips"
OUT="assets/videos/evidence.mp4"
SILENT_OUT="assets/videos/evidence_silent.mp4"
VOICE="${CLIPS_DIR}/voix_off_24s.mp3"
WIDTH=1920
HEIGHT=1080
FPS=24
CRF=20

# --- Options ----------------------------------------------------------------
WITH_AUDIO=1
if [[ "${1:-}" == "--silent" ]]; then
    WITH_AUDIO=0
fi

# --- Vérifications -----------------------------------------------------------
command -v ffmpeg  >/dev/null 2>&1 || { echo "ffmpeg introuvable" >&2; exit 1; }
command -v ffprobe >/dev/null 2>&1 || { echo "ffprobe introuvable" >&2; exit 1; }

for i in 1 2 3 4 5 6 7 8; do
    if [[ ! -f "${CLIPS_DIR}/${i}.gif" ]]; then
        echo "Manquant : ${CLIPS_DIR}/${i}.gif" >&2
        exit 1
    fi
done

mkdir -p "$(dirname "$OUT")"
TMP_LIST="$(mktemp)"
trap 'rm -f "$TMP_LIST"' EXIT

# --- Liste de concaténation -------------------------------------------------
: > "$TMP_LIST"
for i in 1 2 3 4 5 6 7 8; do
    printf "file '%s/%s.gif'\n" "$(pwd)" "$CLIPS_DIR/$i" >> "$TMP_LIST"
done

# --- Assemblage vidéo (GIFs -> MP4) -----------------------------------------
echo ">> Assemblage des 8 GIFs en ${SILENT_OUT}..."
ffmpeg -y -f concat -safe 0 -i "$TMP_LIST" \
    -vf "scale=${WIDTH}:${HEIGHT}:force_original_aspect_ratio=decrease,pad=${WIDTH}:${HEIGHT}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=${FPS}" \
    -c:v libopenh264 -b:v 2M -pix_fmt yuv420p -r "$FPS" \
    "$SILENT_OUT"

# --- Muxage audio (optionnel) -----------------------------------------------
if [[ "$WITH_AUDIO" -eq 1 && -f "$VOICE" ]]; then
    echo ">> Muxage de la voix off (${VOICE})..."
    ffmpeg -y -i "$SILENT_OUT" -i "$VOICE" \
        -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k \
        -af "afade=t=out:st=23:d=1" -shortest \
        "$OUT"
    echo ">> Vidéo finale avec audio : $OUT"
else
    cp "$SILENT_OUT" "$OUT"
    echo ">> Vidéo finale (sans audio) : $OUT"
fi

# --- Résumé -----------------------------------------------------------------
echo ">> Durée : $(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$OUT") s"
echo ">> Taille : $(du -h "$OUT" | cut -f1)"
