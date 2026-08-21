const smartcrop = require('smartcrop-sharp');
const sharp = require('sharp');

smartcrop.crop('public/Sarfaraz-Bugti.png', { width: 400, height: 500 }).then(function(result) {
  const crop = result.topCrop;
  sharp('public/Sarfaraz-Bugti.png')
    .extract({ width: crop.width, height: crop.height, left: crop.x, top: crop.y })
    .resize(400, 500)
    .toFile('public/Sarfaraz-Bugti-Portrait.png')
    .then(() => console.log('Done!'))
    .catch(console.error);
});
