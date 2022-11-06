const fs = require('fs');
const path = require('path');
async function f() {
    await fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
        if (err) throw console.log('Папка не создана')
    })
    let fileList = await fs.promises.readdir(path.join(__dirname, 'files'), { withFileTypes: true });
    fileList.forEach(fileName =>
        fs.copyFile(path.join(__dirname, 'files', `${fileName.name}`), path.join(__dirname, 'files-copy', `${fileName.name}`), err => {
            if (err) console.log('ошибка при копировании')
        })
    )
}
f()
