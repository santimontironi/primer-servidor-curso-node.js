const {readFile} = require('fs')

function filePath(file){
    return new Promise(function(resolve,reject){
        readFile(file,'utf-8',(err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}   

filePath('./data/archivo1.txt')
    .then((res) => console.log(res))
    .catch((error) => console.log(error))

//Se usa .then() y .catch() porque la función filePath devuelve una Promesa, ya que está trabajando de forma asincrónica (leer archivos no es inmediato).
