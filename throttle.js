function throttle(fn, delay, immediate) {
  let valid = false
  return () => {
    if (valid) {
      return
    }
    valid=true
    setTimeout(() => {
      fn()
      valid = false
    }, delay)
  }
}


let thrFun =throttle(()=>{
  console.log(0)
},1000)

window.addEventListener('scroll',thrFun)