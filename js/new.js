function Person(age, name) {
  this.age = age
  this.name = name
}

let person = new Person(12, 'Tom')
console.log(person)

function New(constructorFn, ...args) {
  let obj = {} //创建一个新对象
  obj.__proto__ = constructorFn.prototype // 为这个对象创建一个私有属性__proto__指向构造函数的原型对象
  let result = constructorFn.call(obj, ...args) // 执行构造函数
  return typeof result === 'object' ? result : obj // 构造函数返回一个对象result的话直接返回，否则返回创建的对象obj
}
let person2 = New(Person, 12, 'Tom')
console.log(person2)

console.log(person.__proto__ === person2.__proto__) // 二者原型链相同，
