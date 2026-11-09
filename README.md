# Ganesh's Birthday Surprise — With Love from Lakshmi Kalyani

A responsive birthday greeting website with a romantic welcome screen, draggable love notes, photo memories and a closing birthday wish.

## Add your photographs

1. Open the `images` folder.
2. Copy your photos into it.
3. Rename them exactly:
   - `photo-1.jpg`
   - `photo-2.jpg`
   - `photo-3.jpg`
   - `photo-4.jpg`
4. If your photos are PNG, either convert them to JPG or update the matching image filename in `index.html`.
5. You can add more photo cards by copying one `<article class="paper photo-card ...">` block in `index.html`, changing its image filename and caption.

Use clear, good-quality photos. Portrait photos work especially well in these frames. Avoid very large files; resize images to around 1200 pixels on the longest side for faster loading.

## Preview on your computer

Keep `index.html`, `style.css`, `script.js` and the `images` folder together. Double-click `index.html` to preview, or use VS Code Live Server.

## Publish with GitHub Pages

Upload the files and the `images` folder to the repository. Keep the file names and folder structure unchanged. In GitHub, open **Settings → Pages**, select the `main` branch and `/ (root)` folder, then save.

## Personalise the message

All birthday wording is in `index.html`. Edit the paragraphs and captions directly. Birthday person: Ganesh. Gift/message sender: Lakshmi Kalyani.


## Birthday song

The supplied MP3 is included at `music/birthday-song.mp3`. A floating **Play / Pause** button appears at the bottom-right. Keep the `music` folder when publishing the website.


## Playback troubleshooting

The page loads `script.js` with `defer` so the audio player exists before its Play/Pause handlers are attached. Keep `music/birthday-song.mp3` at this exact path. If publishing updates, upload/replace the full folder contents and hard-refresh the browser.
