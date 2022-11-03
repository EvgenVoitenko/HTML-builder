const fs = require('fs');
const path = require('path');

let dir = fs.promises.readdir(path.join(__dirname, 'secret-folder'))

    .then(() => {
        fs.promises.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true })
            .then(files => {
                files.forEach(element => {
                    if (element.isFile()) {
                        fs.stat(path.join(__dirname, 'secret-folder', element.name), function (errr, stats) {
                            console.log(`${path.parse(element.name).name}-${path.parse(element.name).ext.slice(1)}-${stats.size}b`)
                        })
                    }
                })
            })
            .catch(err => console.log(err))
    })




    .catch(err => console.log(err))