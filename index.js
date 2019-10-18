// Project: thai2karaoke
// Created: Comdevx
// Email: comdevx@gmail.com
// Started: 2017/08/04 21.00
// Facebook: http://www.fb.com/comdevx

const brain = require('brain.js')
const list = require('./word_list')
const toBinary = require('./to_binary')
const convert = require('./convert')

const config = {
    binaryThresh: 0.5, // ¯\_(ツ)_/¯
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
}

const net = new brain.NeuralNetwork()

net.train(list, {
    log: true
})

const w = 'หา'
// const r = brain.likely(toBinary(w), net)
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