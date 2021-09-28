let Vue
class MyRouter {
  //  VueRouter 中传递的参数配置
  constructor(routerOptions) {
    this.$options = routerOptions // 为路由对象添加$options属性用于保存 路由参数配置
    this.current = '/content' // 路由路径
    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1) || '/'
    })
  }
}

MyRouter.install = (_Vue) => {
  Vue = _Vue

  // 创建插件时混入 $router 属性，以便在组件中使用 this.$router 调用路由方法
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    },
  })

  //  创建router-link全局组件
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true,
      },
    },
    render(h) {
      return h(
        'a',
        {
          attrs: {
            href: `#${this.to}`,
          },
        },
        this.$slots.default
      )
    },
  })
  // 创建router-view 组件
  Vue.component('router-view', {
    render(h) {
      let component = null
      // 获取当前router路径
      const current = this.$router.current
      // 获取路由配置中的routes数组进行匹配路由
      const route = this.$router.$options.routes.find((route) => {
        return route.path === current
      })

      if (route) {
        component = route.component
      }

      return h(component)
    },
  })
}

export default MyRouter
