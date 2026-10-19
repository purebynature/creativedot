# CreativeDot: Agency Website

A fast, single-page website for CreativeDot with an animated logo intro, services, showreel video, portfolio gallery, FAQ, offices and WhatsApp contact. Plain HTML, CSS and JavaScript, so there is nothing to install or build.

## Folder structure

```
index.html              Page content
css/style.css           All styles
js/main.js              Intro animation, menu, filters and effects
assets/logo-icon.png    Logo icon (transparent PNG, used in the intro and header)
assets/logo-full.jpg    Full logo with wordmark (reference)
assets/img/             Service, work and portfolio images
assets/video/           Showreel video (showreel.mp4)
```

## Run it locally

Open `index.html` in a browser. Or, from this folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000

## Push to GitHub

```
git init
git add .
git commit -m "CreativeDot website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Publish with GitHub Pages (free hosting)

1. On GitHub open the repo, then **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Things to replace before going live

- **Office addresses** (USA, UK, Dubai): placeholders in the `#offices` section of `index.html`.
- **Contact details**: WhatsApp / phone is `+92 315 7100384`. Search `923157100384` and `0315 7100384` to change it.
- **Stats, FAQ and text**: edit directly in `index.html`.
- **Images and showreel**: replace files in `assets/` and keep the same file names (or update the paths in `index.html`).
- **Logo**: the intro animation is built around the "C with a dot" icon in `assets/logo-icon.png`. A new logo of a different shape needs the animation adjusted.
- Portfolio designs belong to the brands shown. Make sure you have permission to display them.
