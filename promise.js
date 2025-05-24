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

//otra forma de hacer esto es con async await:

async function read(){
    try{
        const result1 = await filePath('./data/archivo1.txt')
        const result2 = await filePath('./data/archivo2.txt')
        const result3 = await filePath('./data/archivo3.txt')
        console.log(result1)
        console.log(result2)
        console.log(result3)
    }
    catch(error){
        console.log(error)
    }
}

read()