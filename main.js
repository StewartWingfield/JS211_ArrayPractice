const cars = ['Ford', 'Subaru', 'Toyota', 'BMW']
console.log(cars.length)

const moreCars = ['Dodge', 'Jeep', 'GMC', 'Honda']

let totalCars = cars.concat(moreCars)
console.log(totalCars)

console.log(totalCars.indexOf('Honda'))
console.log(totalCars.lastIndexOf('Ford'))

let stringOfCars = totalCars.join()
console.log(stringOfCars)

let carsFromString = stringOfCars.split(',')
console.log(carsFromString)

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

carsInReverse.sort()
console.log(carsInReverse.indexOf('BMW'))

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

let reptiles = pets.slice(4, 6)
console.log(reptiles)
console.log(pets)

let removedReptiles = pets.splice(4, 2, 'hamster')
console.log(removedReptiles)
console.log(pets)

let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

pets.push(removedPet)
console.log(pets)

console.log(pets.shift())
console.log(pets.unshift('turtle'))
console.log(pets)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
    arr[index] = num + 2
}

numbers.forEach(addTwo)
console.log(numbers)