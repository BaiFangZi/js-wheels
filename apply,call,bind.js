function Person() {
  this.age = 12
  this.name = 'Tom'
  this.say = function (word) {
    console.log(word)
  }
}
function Cat() {
  this.name = '小咪'
}
const person = new Person()
const cat = new Cat()
person.say('Hi')
person.say.call(cat, 'Hello')
person.say.apply(cat, ['Hello'])
let say = person.say.bind(null, 'Hello')
// let s = new say()
// console.log('---',say)

console.log('***********重写************')

// apply
Function.prototype.myApply = function (Func, args) {
  Func._this = this // 谁调用 this就是谁   person.say.myApply,则this就是person.say
  let result = Func._this(...args) // 执行this
  delete Func._this
  return result
}

person.say.myApply(cat, ['Hello'])

// call
Function.prototype.myCall = function (Func, ...args) {
  Func._this = this // 谁调用 this就是谁   person.say.myCall,则this就是person.say
  let result = Func._this(...args) // 执行this
  delete Func._this
  return result
}
person.say.myCall(cat, 'Hello')

// bind
/**
 *bind不会立即执行，而是返回一个函数
 *调用bind时可以传入参数，执行bind返回的函数的时候，可以继续传入参数
 *bind 返回的函数可以当做普通函数执行，也可以当做构造函数创建实例
 *    当做普通函数执行，this指向bind传入的第一个参数 context
 *    当做构造函数执行，this指向他本身 fBind
 */

Function.prototype.myBind = function (...args) {
  const self = this // 绑定this
  const [context, ...restArgs] = args // 提取参数
  const Fun = function () {} // 创建空函数用于绑定原型

  const fBind = function (...otherArgs) {
    // 如果是当做构造函数来创建实例，那么apply中传入的应该是他本身 this
    // 如果当做普通函数使用，那么传入的就是要调用的函数 context
    const _this = this instanceof fBind ? this : context
    // 拼接执行bind返回的函数的时候继续传入的额外参数
    const params = restArgs.concat(otherArgs)
    return self.apply(_this, params)
  }
  Fun.prototype = this.prototype
  fBind.prototype = new Fun()
  return fBind
}

let mySay = person.say.myBind(cat)
mySay('Hi')
// let aa = new mySay('121')
// aa
