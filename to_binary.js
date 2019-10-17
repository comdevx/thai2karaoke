module.exports = val => {
    let list = ''
    for (let i = 0; i < val.length; i++) {
        list += val[i].charCodeAt(0).toString(2)
    }
    return list
}