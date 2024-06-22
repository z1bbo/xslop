# X Timeline Slop Cleaner

Press **f** to mark the tweet showing at the top of your timeline as slop ("not interested"), which will hide it and tell the algorithm that you want to see less similar content.

Only works on the "For you" page, i.e. x.com/home

## Commands used to create the addon icons
* small: `magick -size 48x48 canvas:white -gravity center -fill red -stroke black -strokewidth 2 -font Arial -pointsize 58 -draw text 0,0 f icon-48.png`
* big: `magick -size 96x96 canvas:white -gravity center -fill red -stroke black -strokewidth 2 -font Arial -pointsize 116 -draw text 0,0 f icon-96.png`
