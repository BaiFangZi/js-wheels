/**
 * 插件的组成
 * 1、一个javascript命名函数或者一个类
 * 2、该函数原型prototype上定义一个apply方法
 * 3、指定一个绑定到webpack自身的事件钩子
 * 4、处理webpakck内部实例的特定数据
 * 5、功能完成过后调用webpack提供的回调函数  ---> 异步编译插件时使用
 *
 *
 */

//  定义一个类
class Signature {
  constructor(options) {
    this.options = options
  }
  // 在prototype上面挂载apply方法
  apply(compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.hooks.emit.tap(
      'Signature', // 插件名
      (compilation) => {
        //  处理webpack内部实例
        console.log('\x1B[32m', '\r\nthis plugin is wrote by baifangzi')
        //  同步编译所以不需要callback
      }
    )
  }
}

//  导出插件
module.exports = Signature

/**
 *  使用方法
 *  const Signature = require('../plugin/signature')
 *
 *  plugin:[
 *   new  Signature()
 *   // ....
 *  ]
 *
 *
 */
