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
// const f = require('./word_list')

const net = new brain.NeuralNetwork()

net.train(list, {
    log: true
})

const word = 'หวาย'
const result = brain.likely(toBinary(word), net)

console.log(word, result)