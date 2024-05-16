
// const alertSpend = amount =>{                              // using one parameter
//     return `Warning ! you just spent ${amount}`
// }
// console.log(alertSpend(100))


// using no paramter 

//  const alertSpend = () =>{
//     return `Warning ! you just spent 200`
//  }
//  console.log(alertSpend())

 // using 2 parametrs

//  const alertSpend = (name,amount) => {
//     return `Warning ${name}! you just spent ${amount}`
//  }
//  console.log(alertSpend('Pooja',300))
 

// const alertSpend = (name,amount) => `Warning ${name}! you just spent ${amount}`               // can be write without return
 
//  console.log(alertSpend('Pooja',300))



// convert the given code into simple no of codes

// const distanceTraveledMiles =[267, 345, 234, 190, 299]
// const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
//     return Math.round(distance * 1.6)
// })

// console.log(distanceTraveledKm)



// usin Arrow functions above code can be reduced to 

const distanceTraveledMiles =[267, 345, 234, 190, 299]
const distanceTraveledKm = distanceTraveledMiles.map( distance => Math.round(distance * 1.6)
)

console.log(distanceTraveledKm)