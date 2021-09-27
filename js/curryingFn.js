// 每次返回函数本身
// 先收集参数，等待参数传入完毕之后再调用

function curry(fn) {
  let allArgs = [] // 利用闭包保存变量
  function curried() {
    allArgs = [...allArgs, ...arguments] // 将每次传入的参数保存
    return curried // 类似链式调用返回this一样，这里每次都需要返回函数，这样下一次执行就可以继续使用 
  }

  curried.toString = function () { // 隐士转换
    // console.log(window) 
    return fn.apply(null, allArgs) //执行回调函数fn
  }
  return curried
}

function dynamicAdd(a, b, c) {
  console.log(this)
  return a + b + c
}
let add = curry(dynamicAdd)
// console.log(add)
// add(1,3)(2)(3)(4) // 10
let result = add(1, 2)()(3, 4)(5, 6) // 21
console.log(result.toString())


let fn = function () {}
fn.toString = function () {
  return 1
}
console.log(fn()) //输出 undefined  
console.log(fn.toString())  // 输出1