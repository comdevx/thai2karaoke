const fw = require('./find_word')

module.exports = (r, w) => {

    console.log(r)

    let f, s, th

    if (r === 'a') {
        f = fw(w[0])
        r = f.first + 'a'
    }

    if (r === 'a1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'a' + s.spell
    }
    if (r === 'a2') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'a' + s.spell
    }
    if (r === 'a3') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + 'a' + s.spell
    }
    if (r === 'a4') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[3])
        r = f.first + s.spell + 'a' + th.spell
    }
    if (r === 'a5') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[3])
        r = f.first + s.spell + 'a' + th.spell
    }
    if (r === 'a6') {
        f = fw(w[0])
        s = fw(w[2])
        th = fw(w[3])
        r = f.first + 'a' + s.spell + th.spell
    }
    if (r === 'a7') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'a' + s.spell
    }
    if (r === 'a8') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[4])
        r = f.first + s.spell + 'a' + th.spell
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
    if (r === 'i1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'i' + s.spell
    }
    if (r === 'i2') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[3])
        r = f.first + s.spell + 'i' + th.spell
    }
    if (r === 'i3') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[4])
        r = f.first + s.spell + 'i' + th.spell
    }
    if (r === 'i4') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + 'i' + s.spell
    }
    if (r === 'ue') {
        f = fw(w[0])
        r = f.first + 'ue'
    }
    if (r === 'ue1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'ue' + s.spell
    }
    if (r === 'ue2') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + 'ue' + s.spell
    }
    if (r === 'ue3') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[3])
        r = f.first + s.spell + 'ue' + th.spell
    }
    if (r === 'ue4') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[4])
        r = f.first + s.spell + 'ue' + th.spell
    }
    if (r === 'u') {
        f = fw(w[0])
        r = f.first + 'u'
    }
    if (r === 'u1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'u' + s.spell
    }
    if (r === 'u2') {
        f = fw(w[0])
        s = fw(w[1])
        r = f.first + s.spell + 'u'
    }
    if (r === 'u3') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[3])
        r = f.first + s.spell + 'u' + th.spell
    }
    if (r === 'u3') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + s.spell + 'u'
    }
    if (r === 'e') {
        f = fw(w[1])
        r = f.first + 'e'
    }
    if (r === 'e1') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + 'e' + s.spell
    }
    if (r === 'e2') {
        f = fw(w[1])
        s = fw(w[3])
        r = f.first + 'e' + s.spell
    }
    if (r === 'e3') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[3])
        r = f.first + s.spell + 'e' + th.spell
    }
    if (r === 'e4') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[4])
        r = f.first + s.spell + 'e' + th.spell
    }
    if (r === 'ae') {
        f = fw(w[1])
        r = f.first + 'ae'
    }
    if (r === 'ae1') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + 'ae' + s.spell
    }
    if (r === 'ae2') {
        f = fw(w[1])
        s = fw(w[3])
        r = f.first + 'ae' + s.spell
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
        r = f.first + 'o' + s.spell
    }
    if (r === 'o3') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + 'o' + s.spell
    }
    if (r === 'oe') {
        f = fw(w[1])
        r = f.first + 'oe'
    }
    if (r === 'oe1') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + s.spell + 'oe'
    }
    if (r === 'oe2') {
        f = fw(w[1])
        s = fw(w[3])
        r = f.first + 'oe' + s.spell
    }
    if (r === 'oe3') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[3])
        r = f.first + s.spell + 'oe' + th.spell
    }
    if (r === 'ia') {
        f = fw(w[1])
        r = f.first + 'ia'
    }
    if (r === 'ia1') {
        f = fw(w[1])
        s = fw(w[4])
        r = f.first + 'ia' + s.spell
    }
    if (r === 'ia2') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[5])
        r = f.first + s.spell + 'ia' + th.spell
    }
    if (r === 'uea') {
        f = fw(w[1])
        r = f.first + 'uea'
    }
    if (r === 'uea1') {
        f = fw(w[1])
        s = fw(w[4])
        r = f.first + 'uea' + s.spell
    }
    if (r === 'uea2') {
        f = fw(w[1])
        s = fw(w[5])
        r = f.first + 'uea' + s.spell
    }
    if (r === 'uea3') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[5])
        r = f.first + s.spell + 'uea' + th.spell
    }
    if (r === 'uea4') {
        f = fw(w[1])
        s = fw(w[2])
        th = fw(w[6])
        r = f.first + s.spell + 'uea' + th.spell
    }
    if (r === 'ua') {
        f = fw(w[0])
        r = f.first + 'ua'
    }
    if (r === 'ua1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'ua' + s.spell
    }
    if (r === 'ua2') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + 'ua' + s.spell
    }
    if (r === 'ua3') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[3])
        r = f.first + s.spell + 'ua' + th.spell
    }
    if (r === 'ua4') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[4])
        r = f.first + s.spell + 'ua' + th.spell
    }
    if (r === 'uai') {
        f = fw(w[0])
        s = fw(w[1])
        th = fw(w[3])
        r = f.first + s.spell + 'uai'
    }
    if (r === 'ai') {
        f = fw(w[1])
        r = f.first + 'ai'
    }
    if (r === 'ai1') {
        f = fw(w[1])
        s = fw(w[2])
        r = f.first + 'ai' + s.spell
    }
    if (r === 'ao') {
        f = fw(w[1])
        r = f.first + 'ao'
    }
    if (r === 'ao1') {
        f = fw(w[0])
        s = fw(w[2])
        r = f.first + 'ao' + s.spell
    }
    if (r === 'ao2') {
        f = fw(w[0])
        s = fw(w[3])
        r = f.first + 'ao' + s.spell
    }
    if (r === 'ui') {
        f = fw(w[0])
        r = f.first + 'ui'
    }
    if (r === 'ui1') {
        f = fw(w[0])
        s = fw(w[1])
        r = f.first + s.spell + 'ui'
    }

    return r
}