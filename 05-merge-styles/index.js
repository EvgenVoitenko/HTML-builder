const fs = require('fs');
const path = require('path');
let styleCss = new Array();
async function f() {

    fs.open(path.join(__dirname, 'project-dist', 'bundle.css'), 'w', err => {
        if (err) throw console.log('файл не создан - произошла ошибка');
    })


    let fileList = await fs.promises.readdir(path.join(__dirname, 'styles'), { withFileTypes: true });
    console.log(fileList);
    fileList.forEach(fileName => {

        if ((path.extname(fileName.name) === '.css') && (fileName.isFile())) {
            console.log('это файл css');
            const readFile = fs.createReadStream(path.join(__dirname, 'styles', `${fileName.name}`), "utf-8");
            readFile.on('data', (enterText) => {

                fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), enterText, (err) => {
                    if (err) throw console.log('произошла ошибка');
                })
                styleCss.push(enterText)
            })
        }
        else { console.log(`это файл расширением ${path.extname(fileName.name)}`) }
    })
}
f();