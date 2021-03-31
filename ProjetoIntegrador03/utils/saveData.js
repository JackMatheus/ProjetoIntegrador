const fs = require ("fs");
const path = require ("path");
// s32:t2:20
const saveData = (array, fileName) =>{

    // transformando o array rezervas em um string
    let dataString = JSON.stringify(array);
    // console.log(dataString);

    //obter o caminho ate o aquivo data/restaurants.js
    let filePath = path.join('data', fileName);
          


    //escrever no arquivo restaurant.js
    fs.writeFileSync(filePath, 'module.exports = ');
    fs.appendFileSync(filePath, dataString);

}

module.exports = saveData;