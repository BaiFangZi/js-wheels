/**
 * 1、一个用于处理内容的javascript函数
 * 2、返回的内容是一个字符串
 * 
 *  
 */

 module.exports = function (source) {
  source += ';console.log(new Date())'
  return source
}


/**
 * 
 * 重定义loader别名
 * 
 * resolveLoader:{
 *  alias:{
 *    'time-tick':path.resolve(__dirname,'../loader/timeTick.js')
 *  }
 * },
 * 
 * module:{
 *  rules:[
 *    {
 *      test:/\.js$/,
 *      loader:'time-tick
 *    }
 *  ]
 * }
 * 
 */