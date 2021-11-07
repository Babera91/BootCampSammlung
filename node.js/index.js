/*console.log('Hello World')
for (let index = 0; index < 3; index++) {
    console.log(index)
    
}
let arr = require('./data')
console.log(arr)


let city = require('./data')
console.log(city)

let myKey = require('./data')
console.log(myKey)


let data2 = require('./data2')
console.log(data2)
console.log(data2.totalKey)
console.log(data2.heroKey)

let login = require('./function.js')
console.log(login)

login('superman')

let myfu = require('./function2')
console.log(myfu)
myfu.logOut('Batman')
myfu.register('Aquaman')

/*const _ = require('lodash')
console.log(_)
console.log(_.sortBy(city.city))
console.log(_.uniq([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2]))*/

//übung lev 1_2
/*const u = require('lodash')
console.log(u)
console.log(u.uniq([1, 6, 9, 2, 1, 6, 7, 10]))
console.log(u.values([1, 6, 9, 2, 1, 6, 7, 10]))*/

let arry2 = require('./function3.js')
const _ = require('lodash.sum')
const C = require('lodash.chunk')
const S = require('lodash.slice')
const l = require('lodash')
console.log(l)
console.log(arry2)
console.log(_(arry2))
console.log(l.first(arry2))
console.log(!l.last(arry2))
console.log(l.sortBy(arry2))
console.log(l.uniq(arry2))
console.log(S(arry2, 0, arry2.length - 1))
console.log(S(arry2, 1, arry2.length))

let para = require('./para')
console.log(para)