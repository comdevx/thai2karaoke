const fw = require('./find_word')

module.exports = (r, w) => {

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
    if (r === 'am') {
        f = fw(w[0])
        r = f.first + 'am'
    }
    if (r === 'i') {
        f = fw(w[0])
        r = f.first + 'i'
    }
    if (r === 'ue') {
        f = fw(w[0])
        r = f.first + 'ue'
    }
    if (r === 'ue1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'ue' + s.first
    }
    if (r === 'ue2') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + 'ue' + s.first
    }
    if (r === 'ue3') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[3])
        r = f.first + s.first + 'ue' + th.first
    }
    if (r === 'ue4') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[4])
        r = f.first + s.first + 'ue' + th.first
    }
    if (r === 'u') {
        f = fw(w[0])
        r = f.first + 'u'
    }
    if (r === 'u1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'u' + s.first
    }
    if (r === 'u2') {
        f = fw(w[0])
        s = fw(w[1])
        r = f.first + s.first + 'u'
    }
    if (r === 'e') {
        f = fw(w[1])
        r = f.first + 'e'
    }
    if (r === 'e1') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + 'e' + s.first
    }
    if (r === 'e2') {
        f = fw(w[1])
        s = fw(w[3])
        r = f.first + 'e' + s.first
    }
    if (r === 'ae') {
        f = fw(w[1])
        r = f.first + 'ae'
    }
    if (r === 'ae1') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + 'ae' + s.first
    }
    if (r === 'o') {
        f = fw(w[1])
        r = f.first + 'o'
    }
    if (r === 'o1') {
        f = fw(w[0])
        r = f.first + 'o'
    }
    if (r === 'o2') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'o' + s.first
    }
    if (r === 'o3') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + 'o' + s.first
    }
    if (r === 'oe') {
        f = fw(w[1])
        r = f.first + 'oe'
    }
    if (r === 'oe1') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + s.first + 'oe'
    }
    if (r === 'oe2') {
        f = fw(w[1])
        s = fw(w[3])
        r = f.first + 'oe' + s.first
    }
    if (r === 'oe3') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[3])
        r = f.first + s.first + 'oe' + th.first
    }
    if (r === 'ia') {
        f = fw(w[1])
        r = f.first + 'ia'
    }
    if (r === 'ia1') {
        f = fw(w[1])
        s = fw(w[4])
        r = f.first + 'ia' + s.first
    }
    if (r === 'ia2') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[5])
        r = f.first + s.first + 'ia' + th.first
    }
    if (r === 'uea') {
        f = fw(w[1])
        r = f.first + 'uea'
    }
    if (r === 'uea1') {
        f = fw(w[1])
        s = fw(w[4])
        r = f.first + 'uea' + s.first
    }
    if (r === 'uea2') {
        f = fw(w[1])
        s = fw(w[5])
        r = f.first + 'uea' + s.first
    }
    if (r === 'uea3') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[5])
        r = f.first + s.first + 'uea' + th.first
    }
    if (r === 'uea4') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[6])
        r = f.first + s.first + 'uea' + th.first
    }
    if (r === 'ua') {
        f = fw(w[0])
        r = f.first + 'ua'
    }
    if (r === 'ua1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'ua' + s.first
    }
    if (r === 'ua2') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + 'ua' + s.first
    }
    if (r === 'ai') {
        f = fw(w[1])
        r = f.first + 'ai'
    }
    if (r === 'ai1') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + 'ai' + s.first
    }
    if (r === 'ao') {
        f = fw(w[1])
        r = f.first + 'ao'
    }
    if (r === 'ao1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'ao' + s.first
    }
    if (r === 'ao2') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + 'ao' + s.first
    }
    if (r === 'ui') {
        f = fw(w[0])
        r = f.first + 'ui'
    }
    if (r === 'ui1') {
        f = fw(w[0])
        s = fw(w[1])
        r = f.first + s.first + 'ui'
    }

    return r
}