// 根据原型链进行判断，如果实例的私有属性__proto__指向构造函数的原型对象prototype，那么代返回true

// function instanceOf(left, right) {
//   while (true) {
//     if (left.__proto__ === null) return false
//     if (left.__proto__ === right.prototype) return true
//     left = left.__proto__
//   }
// }

const instanceOf = (left, right) => {
  let proto = left.__proto__
  let prototype = right.prototype
  while (true) {
    if (proto === null) {
      return false
    } else if (proto === prototype) {
      return true
    }
    proto = proto.__proto__  // 递归链表
  }
}


function C() {}
function D() {}

var o = new C()

o instanceof C // true，因为 Object.getPrototypeOf(o) === C.prototype
instanceOf(o, C)

o instanceof D // false，因为 D.prototype 不在 o 的原型链上
instanceOf(o, D)

o instanceof Object // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
instanceOf(o, Object)

C.prototype instanceof Object // true，同上
instanceOf(C.prototype, Object)

C.prototype = {}
var o2 = new C()

o2 instanceof C // true
instanceOf(o2, C)

o instanceof C // false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.
instanceOf(o, C)

D.prototype = new C() // 继承
var o3 = new D()
o3 instanceof D // true
instanceOf(o3, D)

o3 instanceof C // true 因为 C.prototype 现在在 o3 的原型链上
instanceOf(o3, C)

// console.log(instanceOf(auto, Object))
