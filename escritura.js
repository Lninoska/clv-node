const fs = require ('fs/promises');
const argumentosEntrada = process.argv.slice(2);
const opcion = argumentosEntrada[0];
const modeloAuto  = argumentosEntrada[1];
const propiedad = argumentosEntrada[2];
const valor = argumentosEntrada[3];
const leerArchivo = require('./lectura')

const archivo = 'autos.json';

const escribirDatos = async () => {
    try {
        const datos = await fs.readFile(archivo, 'utf-8');

        if(datos.length !== 0) {
            objetoDatos = JSON.parse(datos);
        }

        if(!modeloAuto){
            console.log("Falta el nombre del modelo del auto para modificar.");
            return;
        }

        if(!propiedad || !valor){
            console.log("Debe espcificar una propiedad y su valor para guardar.")
        }

        const nuevoObjeto = {...objetoDatos[modeloAuto], [propiedad]: valor, }
                
        await fs.writeFile(archivo, JSON.stringify(nuevoObjeto, null, 2));
        console.log('Los datos han sido agregados existosamente')
    }catch(error){
        console.log('Lo sentimos, ha ocurrido un error')
        console.log(error)
    }
}

module.exports = { escribirDatos }
