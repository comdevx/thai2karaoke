// Project: thai2karaoke
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2017/08/04 21.00
// Facebook: http://www.fb.com/comdevx

const brain = require('brain.js')
const list = require('./word_list')
const toBinary = require('./to_binary')
const convert = require('./convert')

const config = {
    binaryThresh: 0.5,
    hiddenLayers: [10], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
}

const net = new brain.NeuralNetwork(config)

net.train(list, {
    // iterations: 20000,
    log: true,
    logPeriod: 100,
    errorThresh: 0.001,
    timeout: Infinity,
})

const w = 'ครับ'

// let r = brain.likely(toBinary(w), net)
// r = convert(r, w)
// console.log(r)

const r = net.run(toBinary(w))
let a = []
for (const val in r) {
    a.push([val, r[val]])
}

a.sort(function (a, b) {
    return a[1] - b[1]
})
console.log(a)
const i = a.length - 1
a = convert(a[i][0], w)
console.log(a)