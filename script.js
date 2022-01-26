
// let arr = [5,6,7,8,9]
// arr.forEach(function(item){
//    let sumNumber += item

// })

// let arr = [5,6,7,8,9]
// let summ = 0
// arr.forEach(item => summ += item)
// console.log(summ)

// let arr = [5,6,7,8,9]
// const sqr = arr.map(number => number * number)


// let arr = [
//     {name: 'Ivan', country: 'Ukraine'},
//     {name: 'Petro', country: 'Ukraine'},
//     {name: 'Miguel', country: 'Cuba'}
// ]
// const check = arr.every(country => country.country == 'Ukraine')


// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
// ]

// const check = arr.some(country => country.country == 'Cuba')
// console.log(check)

// let arr = [1,'string',[3,4],5,[6,7]]
// const check = arr.filter(Array.isArray);
// console.log(check)

// недоробив
// let arr = [1, 2, 5, 0, 4, 5, 6]
// let summ = arr.reduce(function (sum, current) {
//     if(current === 0){
//       return
//     }else{
//         return sum + current
//     }

// }, 0)
// console.log(summ)


// let arr = [1,1,1,0,4,5,6]
// let summ = arr.reduce(function(sum,current,index){
//     if(sum <= 10){
//         return sum += current
//     }else{
//         console.log(index)
//     }
// },0)

let arr = [1,-2, 4 ,0,9,-5,16,-11]
let filter = arr.filter(num => num > 0).reduce((total,current) => Math.sqrt(current))
console.log(filter)
