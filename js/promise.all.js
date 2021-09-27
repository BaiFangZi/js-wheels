function PromiseAll(promiseArr) {
  let result = [] // 结果 
  let successCount = 0 // 请求成功次数
  return new Promise((resolve, reject) => { // 返回的是一个Promise对象
    promiseArr.forEach((promise, index) => {
      // 遍历执行每个promise
      promise
        .then((res) => {
          successCount++ // 请求成功次数+1
          result[index] = res // 响应结果与promise对应
          if (successCount === PromiseAll.length) { // 请求成功次数与promise个数相等时才返回结果
            resolve(result)
          }
        })
        .catch((err) => {// 任意一个promise出错 请求失败
          reject(err)
        })
    })
  })
}

let promise1 = new Promise(function (resolve) {
  resolve(1)
})
let promise2 = new Promise(function (resolve) {
  resolve(2)
})
let promise3 = new Promise(function (resolve) {
  resolve(3)
})

// let promiseAll = Promise.all([promise1, promise2, promise3])
// promiseAll.then(function (res) {
//   console.log(res)
// })
 
let promiseAll = PromiseAll([promise1, promise2, promise3])
promiseAll.then(function (res) {
  console.log(res)
})

