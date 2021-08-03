function debounce(fn, delay, immediate) {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

let debFun =debounce(()=>{
  console.log(0)
},100)

window.addEventListener('scroll',debFun)