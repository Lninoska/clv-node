const {leerArchivo, leerAuto } = require('./lectura')
const escribirDatos = require('./escritura')

const argumentosEntrada = process.argv.slice(2);
const opcion = argumentosEntrada[0];
const modeloAuto = argumentosEntrada[1];
const propiedad = argumentosEntrada[2];
const valor = argumentosEntrada[3];

const verificarOpcionEntrada = () => {
    switch(opcion) {
        case'leer':
        if(modeloAuto) {
            leerAuto(modeloAuto);
        } else {
            leerArchivo();
        }
        break;
        case 'modificar':
            escribirDatos(modeloAuto, propiedad, valor);
            break;
            default:
                console.log("Opcion no válida. Usa 'leer' o 'modificar'." )
    }
}

verificarOpcionEntrada()