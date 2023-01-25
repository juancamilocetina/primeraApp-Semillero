var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!!!!!!!!!!!',
      año : 0,
      mes : 0,
      dia : 0,
      rta : "",
      datos : [],
      nombre : '',
      apellido : '',
      usuario : ''
    },
    methods: {
        guardar: function() {
            // console.log(this.nombre);
            
            this.datos.push({
                Nombre : this.nombre,
                Apellido : this.apellido,
                Usuario : this.usuario,
                Clave : Math.random().toString(36).substring(0,503)
            });
            
            for( prop in this.datos){
                
                // if(prop > 0){
                //     if(this.datos.Usuario == this.datos[prop].Usuario){
                //         alert("Usuario repetido")
                //     }
                // }
                console.log("//----------------//");    
                console.log("Nombre: "+this.datos[prop].Nombre);
                console.log("Apellido: "+this.datos[prop].Apellido);
                console.log("Usuario: "+this.datos[prop].Usuario);
                console.log("Clave: "+this.datos[prop].Clave);
                console.log("//----------------//"); 
                console.log(datos.length)
                
            }
            
            
            this.nombre = '';
            this.apellido = '';
            this.usuario = '';
        },
        edad(){
            // // const btnEmpezar = document.getElementById("botonGuardar");

            // // cargarEventos();

            // // function cargarEventos() {
            // //     btnEmpezar.addEventListener('click', verificar);
            // // }

            // // function verificar (e) {
            // //     e.preventDefault();

            // //     let nombre = document.getElementById("nombre").value;
            // //     let apellido = document.getElementById("apellido");
            // //     let usuario = document.getElementById("usuario");

            // //     console.log(nombre)
            // // }
            // // const guardar = new Guardar();

            // let nombre = document.getElementById("nombre").value;
            // let apellido = document.getElementById("apellido").value;
            // let usuario = document.getElementById("usuario").value;

            // console.log(nombre)
            // localStorage.setItem('nombre');

            // guardar.guardarDatos(nombre, apellido, usuario);


            //---------------------------------------------------------//

            

            
            // this.rta =  "Su edad es de : " + (2023 - this.año) + "año(s)"
            if( this.año < 2023) {
                if(this.mes === 1){
                    if(this.dia <= 25){
                        this.rta =  "Su edad es de : " + (2023 - this.año) + " año(s)"
                    }
                } if (this.año === 0 || this.mes === 0 || this.dia ===0){
                    alert("Datos incompletos, por favor complete los datos requeridos")
                }
                else {
                    this.rta =  "Su edad es de : " + (2023 - this.año - 1) + "año(s)"
                }
            }
            
        }
    }
  })
