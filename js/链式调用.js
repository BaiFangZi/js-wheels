function Person(name) {
  this.name = name
  this.sleep = () => {
    return this
  }
  this.eat = () => {
    // console.log(this)
    console.log('eat')
    return this
  }
}

const per = new Person('Tom')
const t = per.eat().sleep()


