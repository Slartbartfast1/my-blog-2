const Jimp = require('jimp');
const fs = require('fs');


fs.readdir(__dirname, (err, file) => {
    if (err) {
        console.log('error')
    }
    file.forEach((img) => {
        if (img[img.length - 1] === 'g' && img.slice(-10, -4) !== '-thumb') {
            thumb(img)
            console.log(img + ':done')
        }
    })

})

function thumb(file) {
    Jimp.read(file, (err, img) => {
        if (err) throw err;
        img
            .resize(150, 40)
            .quality(50)
            .write(`${file.slice(0, -4)}-thumb${file.slice(-4)}`);

    });
}


