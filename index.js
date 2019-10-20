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
    binaryThresh: 0.0001,
    hiddenLayers: [10, 10], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
}

const net = new brain.NeuralNetwork(config)

net.train(list, {
    // iterations: 20000,
    log: true,
    logPeriod: 100,
    errorThresh: 0.005,
    timeout: Infinity,
})

const w = ['เลย', 'โหว']

// let r = brain.likely(toBinary(w[0]), net)
// let r2 = brain.likely(toBinary(w[1]), net)
// r = convert(r, w[0])
// r2 = convert(r2, w[1])
// console.log(r, r2)

const r = net.run(toBinary(w[0]))
let a = []
for (const val in r) {
    a.push([val, r[val]])
}

a.sort(function (a, b) {
    return a[1] - b[1]
})
console.log(a)
const i = a.length - 1
a = convert(a[i][0], w[0])
console.log(a)