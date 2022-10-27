const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises');

const dotenv = require('dotenv');
dotenv.config();

// PORT и NODE_ENV задаются файлом. AYRAT и CITY задаются через npm start в скрипте
const {PORT, NODE_ENV, AYRAT='(use script)', CITY='(use script)'} = process.env;
console.log(PORT, NODE_ENV, AYRAT, CITY);

// промисное чтение
fsp.readFile(path.join(__dirname, 'fileToRead.txt'),{encoding:'utf-8'}).then(res => console.log(res));

// обёртывание асинх в промисы
async function asyncWriteFile(folder, file, data){
    return new Promise((resolve, reject) => {
      fs.writeFile(path.join(folder,file), data, {},(err) => {
          if(err){
              console.log(err);
              return;
          }
          resolve('success write ops')
      });
    })
}

asyncWriteFile(__dirname, 'newer.txt','winner').then(result => console.log(result));

fs.readFile(path.join(__dirname, 'fileToRead2.txt'), {encoding:'utf-8'},(err, readData) => {
    if (err) {
        throw new Error('ошибка чтения');
    }
    console.log(`файл 2 прочитан: ${readData}`);
})