const {readFile} = require('fs')
const {promisify} = require('util')

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

//haciendo la promesa con el modulo promisify

const filePathPromise = promisify(readFile)

//usando async await

async function read(){
    try{
        const result1 = await filePathPromise('./data/archivo1.txt', 'utf-8')
        const result2 = await filePathPromise('./data/archivo2.txt', 'utf-8')
        const result3 = await filePathPromise('./data/archivo3.txt', 'utf-8')
        console.log(result1)
        console.log(result2)
        console.log(result3)
    }
    catch(error){
        console.log(error)
    }
}

read()