class Mitt {
    constructor() {
        this.keys = new Set()
        this.events = new Map()
    }
    on(key, cb) {
        console.log(this)
        this.keys.add(key)
        this.events.set(key, cb)

    }
    emit(key, ...args) {
        console.log(this)
        if (!this.keys.has(key)) return
        let callback = this.events.get(key)
        if (callback) {
            callback(...args)
        }

    }
    off(key) {
        this.keys.delete(key)
        this.events.delete(key)

    }

}

const mitt = new Mitt()

mitt.on('say', (name, msg, ) => {
    console.log(`${name} say ${msg}`)
})

mitt.emit('say', 'Tom', 'hello!')
mitt.off('say')

mitt.emit('say', 'Jerry', 'hello!')