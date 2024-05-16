// sum of numbers in array
// const numbers = [10,20,0,122]
// const sum = numbers.reduce(function(total,currentElement){
//     return total+currentElement
// })
// console.log(sum)

// finding largest number in array

const numbers =[10,5,20,15,25]
const largestNumber = numbers.reduce(function(larger,currentElement){
    if (larger>currentElement){
        return larger
    }
    else{
        return currentElement
    }

})
console.log(largestNumber)