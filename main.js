var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!!!!!!!!!!!',
      n1 : 0,
    },
    methods: {
        edad(){
            const fechaNacimiento = document.getElementById("fechaNacimiento");
            console.log(fechaNacimiento)
            window.addEventListener('load', function () {

                fechaNacimiento.addEventListener('change', function () {
                    console.log(this.value);
                });
            });
        }
    }
  })
