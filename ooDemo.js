const person = {
  firstName : 'Kristen',
  lastName: 'Moore',
  favColor: 'yellow'
}

console.log(person.firstName) //dot notation
console.log(person['lastName']) //bracket notation
const color = 'favColor'
console.log(person[color]) //variable notation

const {firstName: nickname, lastName: surname, favColor: bestColor} = person //assigning values using person object values

console.log(nickname)
console.log(surname)
console.log(bestColor)
console.log(person) //object stays the same

person.hasPets = false //adding keys w/ dot notation
console.log(person)

const meal = {
  appetizer : 'mozarella sticks',
  entree: 'chicken sandwich',
  dessert: 'cheesecake',
  drink: 'water'
}

const {dessert} = meal //destructuring
console.log(dessert)

const {appetizer, entree} = meal //destructuring multiple
console.log(appetizer)
console.log(entree)

const {drink:myFavDrink} = meal //creating 'myFavDrink' variable and setting value as equal to drink key
console.log(myFavDrink)
console.log(meal) //not reassigning object drink; object is still the same

//creating loop to get all the keys
for (plate in meal) {
  console.log(plate)
}

for (plate in meal) { //key is plate; value is meal[plate]
  console.log(`The key is ${plate} and the value is ${meal[plate]}.`)
}

delete meal.entree //deleting key
console.log(meal)


//CLASSES

class Dog {
  constructor(name, breed, age) {
    this.name = name
    this.breed = breed
    this.age = age
  }

  greeting() {
    console.log(`Hello, I'm ${this.name}, the ${this.breed}, and I'm ${this.age}.`)
  }
}

let butterscotch = new Dog('butterscotch', 'lab', 2) 
console.log(butterscotch)

let oreo = new Dog('oreo', 'dalmation', 1)
console.log(oreo)
oreo.greeting()

//for loop to print values in object
for (attr in oreo) { //key is attr; value is oreo[attr]
  console.log(oreo[attr])
}

//extending class
class Puppy extends Dog { //everything from Dog is inherited
  constructor(name, breed, age, trainingLevel) {
    super(name, breed, age) //pulls from parent
    this.trainingLevel = trainingLevel
  }

  accident() {
    console.log(`${this.name} has peed on the floor.`)
  }

  levelUp(num) {
    this.trainingLevel += num
  }
  
}

let fido = new Puppy('Fido', 'beagle', 1, 12)
console.log(fido)
fido.greeting()
fido.accident()
fido.levelUp(5)
console.log(fido.trainingLevel)