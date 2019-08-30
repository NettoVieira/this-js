/**
 * Uma função dentor de uma função
 */

this.name = 'Valeska'

function age (age) {
  this.name = 'Joshua'

  function birthYear(agr) {
    this.name = 'Kyam'

    const year = 2019 - age
    console.log(this.name, year)
  }
  
  birthYear(age)

  console.log(this.name)
}

age(25)
