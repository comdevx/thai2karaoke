// Project: thai2karaoke
// Created: Comdevx
// Email: comdevx@gmail.com
// Started: 2017/08/04 21.00
// Facebook: http://www.fb.com/comdevx
// สามารถสนับสนุนได้นะครับ
// BTC: 13owVDCcYykj853S5W37Ys7np97jvCtL7Z
// ETH: 0xa751F70e862E3747e435430105bbE6db20C828C9
// LTC: LNP95PsUgtzYghK5Ada7w3hHK2WwEYSSwn
// XRP: rp7Fq2NQVRJxQJvUZ4o8ZzsTSocvgYoBbs

const brain = require('brain.js')
const list = require('./word_list')
const toBinary = require('./to_binary')
const fw = require('./find_word')

const net = new brain.NeuralNetwork()

net.train(list, {
    log: true
})

const w = 'จรร'
let r = brain.likely(toBinary(w), net)
console.log(r)
let f, s, th
if (r === 'a' || r === 'a1') {
    f = fw(w[0])
    r = f.first + 'a'
}
if (r === 'a2' || r === 'a3') {
    f = fw(w[0])
    th = fw(w[2])
    r = f.first + 'a' + th.first
}
if (r === 'a4') {
    f = fw(w[0])
    th = fw(w[3])
    r = f.first + 'a' + th.first
}
if (r === 'a5') {
    f = fw(w[0])
    s = fw(w[1])
    th = fw(w[3])
    r = f.first + s.first + 'a' + th.first
}
if (r === 'a6') {
    f = fw(w[0])
    s = fw(w[2])
    th = fw(w[3])
    r = f.first + 'a' + s.first + th.first
}
if (r === 'a7') {
    f = fw(w[0])
    s = fw(w[2])
    r = f.first + 'a' + s.first
}
if (r === 'a8') {
    f = fw(w[0])
    s = fw(w[1])
    th = fw(w[4])
    r = f.first + s.first + 'a' + th.first
}
if (r === 'an') {
    f = fw(w[0])
    r = f.first + 'an'
}

console.log(r)