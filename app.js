const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log("Tarea creada".bgBlue.white, tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        if (listado.length > 0) {
            for (let tarea of listado) {
                console.log('==========Por hacer=========='.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('============================='.green);
            }
        } else {
            console.log('NO HAY TAREAS POR HACER'.green);
        }
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log("Tarea actualizada".bgBlue.white);
        } else {
            console.log("No se puedo actualizar la tarea".bgRed.white);
        }
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log("Tarea borrada".bgBlue.white);
        } else {
            console.log("No se puedo borrar la tarea".bgRed.white);
        }
        break;
    default:
        console.log('Comando no reconocido.')
}