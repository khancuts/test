// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()
// on - listen for an event
// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
customEmitter.on('response', () => {
  console.log('received data')
})

customEmitter.on('response', (name, age) => {
  console.log(`received data from ${name} and the age is ${age} years old`)
})

// emmit - emit an event
customEmitter.emit('response', 'gheby', 25)

// 1. you can call as mauch as you want the event
// 2. the emit execute event base on position
// 3. you can pass the argument on the events
