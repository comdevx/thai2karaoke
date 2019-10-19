module.exports = val => {
    let list = []
    for (let i = 0; i < val.length; i++) {
        const bi = val[i].charCodeAt(0).toString(2)
        for (let ii = 0; ii < bi.length; ii++) {
            list.push(bi[ii])
        }
    }
    return list
}