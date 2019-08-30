// Contexto dentro de um metodo
// - não pega o this global, somente do objeto.

this.name = 'João'

const dev = {
  name: "Cleiton",
  sayMyName: function() {
    console.log(this.name) //Cleiton
  }
}

dev.sayMyName()