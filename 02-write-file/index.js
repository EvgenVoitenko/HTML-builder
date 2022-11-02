const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin, stdout } = process;


fs.open(path.join(__dirname, 'text.txt'), 'w', err => {
    if (err) throw console.log('файл не создан - произошла ошибка');
    console.log('Вводите текст')
})


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', (answer) => {
    if (answer == 'exit') {
        console.log("Bye")
        r1.close()
    };
    fs.appendFile(path.join(__dirname, 'text.txt'), answer, (err) => {
        if (err) throw console.log('Save файл не создан - произошла ошибка');
    })
})
r1.on('SIGINT', function () {
    console.log("Byyyyyyyyyye");
    r1.close();
});

