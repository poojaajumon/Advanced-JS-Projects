
// . map method

// const arr = [2,4,6]
// const newArr = arr.map (function(element){
//     return element * element
// })

// console.log(newArr)

///////////////////////////////////////////////////////////////////////
// const energyCostEuros = [140,153,164,153,128,146]
// const exchangeRate = 1.13
// const energyCostDollar = energyCostEuros.map( function(energyCost){
//     return energyCost* exchangeRate
// })

// console.log(energyCostDollar)

/////////////////////////////////////////////////////////////////////////

let users = [
{firstName : "Susan" , lastName : "Steward"},
{firstName : "Daniel" , lastName : "Longbottom"},
{firstName : "Jacob" , lastName : "Black"}
]

let newUsers = users.map(function(user){
    return `<li>${user.firstName} ${user.lastName}</li>`

})
// .join('')

console.log(newUsers)

// . join method
const newUsersString = newUsers.join('')
console.log(newUsersString)

document.getElementById('names').innerHTML = `<ul>${newUsersString}</ul>`