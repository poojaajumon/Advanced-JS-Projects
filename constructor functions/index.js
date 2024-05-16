// let person ={
//     firstName : "Ajumon",
//     lastName : "P.L"
// }

// let person2 = {
//     firstName : "Pooja",
//     lastName : "Ajumon"
// }

// // constructor function
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.displayName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     };
// }

// let person1 = new Person('Ajumon', 'P.L');
// console.log(person1.displayName());
// let person3 = new Person('Pooja', 'Ajumon');
// console.log(person3.displayName());
// let person4 = new Person('Parthavi', 'P.A');
// console.log(person4.displayName());


// const anima1 = {
//     name : "Tilly",
//     species : "tiger",
//     weightKg : 56,
//     age : 2
// }
// const animal2 = {
//     name : "Nelly",
//     species : "elephant",
//     weightKg : 320,
//     age : 16

// }
// function Animal(data){
//     this.name = data.name,
//     this.species = data.species,
//     this.weightKg = data.weightKg,
//     this.age = data.age,
//     this.description = function(){
//         console.log(`${this.name} is a ${this.species}.It is of age ${this.age} ang weighs ${this.weightKg} in Kg.`)
//     }
// }

// let tiger = new Animal(anima1)
// tiger.description()
// console.log(tiger)

// let elephant = new Animal(animal2)
// elephant.description()
// console.log(elephant)


const room1 = {
    name : 'Safari View',
    rooms : 30,
    costPerNightAdult : '240'

}
const room2 = {
    name : 'Leopard Mansion',
    rooms : 96,
    costPerNightAdult : '120'

}
function NationalParkHotels(data){
    this.name = data.name,
    this.rooms = data.rooms,
    this.costPerNightAdult = data.costPerNightAdult,
    this.summariseHotel = function(){
        console.log (`A one night stay at the ${this.name} for two adults and two children costs a total of  ${this.costPerNightAdult*2} Rs.`)
    }
}
let firstroom = new NationalParkHotels(room1)
firstroom.summariseHotel()
let secondroom = new NationalParkHotels(room2)
secondroom.summariseHotel()
