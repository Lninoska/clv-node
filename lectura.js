const fs = require('fs/promises')

const archivo = 'autos.json'

const leerArchivo = async () => {
    try {
        const datos = await fs.readFile(archivo, 'utf-8');

        if(datos.length == 0) {
            return console.log('El archivo se encuentra vacío')
        }
        console.log(JSON.parse(datos))
    } catch (error) {
        console.log('Lo sentimos, ha ocurrido un error');
        console.log(error)
    }
} 

const leerAuto = async (modeloAuto) => {
    try {
        const datos = await fs.readFile(archivo, 'utf-8');
        if(datos.length === 0){
            console.log("El archivo esta vacío.");
            return;
        }
        const objetoDatos = JSON.parse(datos);
        if(objetoDatos[modeloAuto]) {
            console.log(`Características de ${modeloAuto}:`. objetoDatos[modeloAuto]);
        } else {
            console.log(`El auto "${modeloAuto}" no exite en los datos.`);
        }
    }catch(error) {
        console.log("Error al leer los datos del auto", error.message)
    }
};





module.exports = {leerArchivo, leerAuto }
