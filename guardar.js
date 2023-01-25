// class Guardar {

//     guardarDatos(nombre, apellido, usuario){
//         const infoPersona = {
//             nombre : nombre,
//             apellido : apellido,
//             usuario : usuario
//         }

//         this.guardaDatosLocalStorage(infoPersona);
//     }

//     guardaDatosLocalStorage(infoPersona){
//         let guardar;
        
//         guardar = this.obtenerDatosLocalStorage();

//         guardar.push(infoPersona);

//         localStorage.setItem('guardar', JSON.stringify(guardar))

//     }

//     obtenerDatosLocalStorage(){
//         let guardarLS;

//         if(localStorage.getItem('guardar') === null){
//             guardarLS = [];
//         }
//         else {
//             guardarLS = JSON.parse(localStorage.getItem('guardar'));
//         }
//         return guardarLS;
//     }
// }