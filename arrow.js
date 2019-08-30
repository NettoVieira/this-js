/**
 * Como funciona o this na arrow function
 *  - pega o this do escopo anterior.
 */

this.name = 'Valeska'

const age =  age => {

  this.name = 'Kyam'

  const birthYear = agr => {
    const year = 2019 - age
    console.log(this.name, year)
  }
  
  birthYear(age)
}

const dev = {
  sayMyName: () => {
    this.name = 'Enzo'
    console.log(this.name)
  }
}

dev.sayMyName()
console.log(this.name)
