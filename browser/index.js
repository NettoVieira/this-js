"user strict"

this.name = 'Valeska'

function sayMyName() {
  console.log(sayMyName)
}

const user = {
  sayMyName: function() {
    console.log(this.name)
  }
}

user.sayMyName()

console.log(this.name)