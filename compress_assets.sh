#!/bin/sh
    #youtube-video-player/js/youtube-video-player.jquery.min.js \
    #youtube-video-player/packages/perfect-scrollbar/jquery.mousewheel.js \
    #youtube-video-player/packages/perfect-scrollbar/perfect-scrollbar.js \
    #js/slick.js \

cat js/jquery.min.js \
    js/popper.min.js \
    js/bootstrap.min.js \
    js/app.js \
    js/easy.js > js/concat.js

echo "JS concatenation successful"

# Minify the combined JS
# Requires: UglifyJS (Node)

uglifyjs --output js/gynkar.min.js js/concat.js
rm js/concat.js

echo "JS uglification successful"

cat css/bootstrap.min.css \
    css/bootstrap-social.css \
    css/infinite-slider.css \
    css/slick.css \
    css/half-slider.css \
    youtube-video-player/packages/icons/css/icons.min.css \
    youtube-video-player/css/youtube-video-player.min.css \
    youtube-video-player/packages/perfect-scrollbar/perfect-scrollbar.css \
    css/font-awesome.min.css > css/concat.css

echo "CSS concatenation successful"

# Minify the combined CSS
# Requires: UglifyCSS (Node)

uglifycss --output css/style.min.css css/concat.css
rm css/concat.css

echo "CSS uglification successful"

exit 0
