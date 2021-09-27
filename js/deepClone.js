// function deepClone(obj) {
//   let result
//   // 引用类型  数组，对象
//   if (obj instanceof Object) {
//     let result = Array.isArray(obj) ? [] : {}
//     for (let item in obj) {
//       result[item] = obj[item] instanceof Object ? deepClone(obj[item]) : obj[item]
//     }
//   }
//   // 基本类型直接赋值
//   else {
//     result = obj
//   }
//   return result
// }

function deepClone(obj) {
  let result

  if (obj instanceof Object) {
    result = Array.isArray(obj) ? [] : {}
    for (let item in obj) {
      result[item] =
        obj[item] instanceof Object ? deepClone(obj[item]) : obj[item]
    }
  } else {
    result = obj
  }

  return result
}



let obj = {
  a: 1,
  b: null,
  c: [
    1,
    2,
    {
      d: 4,
      e() {},
    },
  ],
}

let objClone = deepClone(obj)
console.log(obj)
