var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!!!!!!!!!!!',
      n1 : 0,
      n2 : 0,
      n3 : 0,
      n4 : 0,
      rta : "",
      arrs : [1,2,3,4,5]
    },
    methods: {
        suma(){
            this.rta = this.n1 + this.n2
        },
        resta(){
            this.rta = this.n1 - this.n2
        },
        multiplicacion(){
            this.rta = this.n1 * this.n2
        },
        division(){
            this.rta = this.n1 / this.n2
        },
        mm(){
            this.rta = this.n1 / this.n2
        }
    }
  })
