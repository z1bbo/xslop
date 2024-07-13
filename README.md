[![Mozilla badge](https://img.shields.io/amo/rating/x-timeline-slop-cleaner?label=Firefox)](https://addons.mozilla.org/addon/x-timeline-slop-cleaner/)
# X Timeline Slop Cleaner

<a href="https://addons.mozilla.org/addon/x-timeline-slop-cleaner/"><img src="https://github.com/user-attachments/assets/90f96e34-5caf-47cf-826b-e13314397876" alt="Get X Timeline Slop Cleaner for Firefox"></a>

Press **f** to mark the tweet showing at the top of your timeline as slop ("not interested"), which will hide it and tell the algorithm that you want to see less similar content.

Only works on the "For you" page, i.e. x.com/home

## How to release a new version
1. update the version in `manifest.json`
2. zip the files: `zip -r xslop.zip icons main.js manifest.json`
3. go to about:debugging -> this Firefox, load the zip to test it
4. upload the zip at (top left) https://addons.mozilla.org/zh-TW/developers/addon/x-timeline-slop-cleaner/edit

## Commands used to create the addon icons
* small: `magick -size 48x48 canvas:white -gravity center -fill red -stroke black -strokewidth 2 -font Arial -pointsize 58 -draw text 0,0 f icon-48.png`
* big: `magick -size 96x96 canvas:white -gravity center -fill red -stroke black -strokewidth 2 -font Arial -pointsize 116 -draw text 0,0 f icon-96.png`
