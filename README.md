[![Mozilla badge](https://img.shields.io/amo/rating/x-timeline-slop-cleaner?label=Firefox)](https://addons.mozilla.org/addon/x-timeline-slop-cleaner/)
# X Timeline Slop Cleaner

<a href="https://addons.mozilla.org/addon/x-timeline-slop-cleaner/"><img src="https://github.com/user-attachments/assets/90f96e34-5caf-47cf-826b-e13314397876" alt="Get X Timeline Slop Cleaner for Firefox"></a>

Press **f** to mark the tweet showing at the top of your timeline as slop ("not interested"), which will hide it and tell the algorithm that you want to see less similar content.

Only works on the "For you" page, i.e. x.com/home

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://github.com/user-attachments/assets/00ca8e43-0411-431a-978a-fecb35f06c9f" width="40%" style="margin-right: 20px;">
  <img src="https://github.com/user-attachments/assets/d647e422-29e3-4148-9f26-c76ba80260dd" style="width: 36px; display: inline-block; vertical-align: middle; margin-bottom: 300px">&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/ad73ae19-bc4f-4731-b1a5-3c9a18c37f2e" width="40%" style="margin-left: 20px;">
</div>

## Developing
### How to release a new version
1. update the version in `manifest.json`
2. zip the files: `zip -r xslop.zip icons main.js manifest.json`
3. go to about:debugging -> this Firefox, load the zip to test it
4. upload the zip at (top left) https://addons.mozilla.org/zh-TW/developers/addon/x-timeline-slop-cleaner/edit

### Commands used to create the addon icons
* small: `magick -size 48x48 canvas:white -gravity center -fill red -stroke black -strokewidth 2 -font Arial -pointsize 58 -draw text 0,0 f icon-48.png`
* big: `magick -size 96x96 canvas:white -gravity center -fill red -stroke black -strokewidth 2 -font Arial -pointsize 116 -draw text 0,0 f icon-96.png`
