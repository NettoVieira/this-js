// function.call(this, arg1, arg2)
// call do ingês chamar
//retornar o this do contexto que eu enviar.

this.name = 'Camila'
this.age = '30'

function sayMyName(age) {
  this.age = age
  console.log(this.name, this.age)
}

const dev = {
  name: 'Isabela',
  age: 35,
  sayMyAge: function() {
    console.log(this.name, this.age)
  }
}

/**
 * bind = ligar
 * retorna a função chamada porém, ligada ao contexto que lhe foi passado
 */

const desenv = dev.sayMyAge.bind(this)
desenv()



/** 
 * Manipulando um certo dado para dentro o contexto global(this) e referenciando
 * um o objeto para dentro da função está em um contexto diferente 
 */
  // sayMyName.call(this) 
  // sayMyName.call(dev)

  // console.log(this.age)
  // console.log(dev.age)

function multiply() {
  const args = Array.from(arguments)
  return args.reduce((acc, item) => {
    return acc * item
  }, 1)
}

const total = multiply.apply(this,  [2, 2, 3, 2])
console.log(total)