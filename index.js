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

var wordList = [
    'ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ',
    'ฉ', 'ช', 'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ',
    'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ', 'ท', 'ธ',
    'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ',
    'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส',
    'ห', 'ฬ', 'อ', 'ฮ', 'ฤ', 'ฤๅ', 'ฦ', 'ฦา',
    'ะ',//อะ
    'ั',//อั
    'า',//อา
    'ำ',//อำ
    'ิ',//อิ
    'ี',//อี
    'ึ',//อึ
    'ื',//อื
    'ุ',//อุ
    'ู',//อู
    'เ',//เอ
    '็',//อ็
    'โ',//โอ
    '์',//อ์
    'แ',//แอ
    'ใ',
    'ไ',
];

exports.thai2karaoke = function () {
    return function (req, res) {
        var text = req.body.text;
        text = wordCut(text);
        var result = '';

        for (i = 0; i < text.length;) {
            if (text[i] === wordList[42] && text[i + 3] === wordList[42]) {
                result += 'a';
                i = i + 1;
            } else if (text[i] && text[i + 1] === wordList[61] || text[i] && text[i + 1] === wordList[52] && text[i + 2] === wordList[61]) {
                result += '';
                i = i + 2;
            } else if (text[i] === wordList[0] && text[i + 1] === wordList[34] && text[i + 2] === wordList[34] && text[i + 3] === wordList[32]) {
                result += letter(text[i]) + 'amma';
                i = i + 4;
            } else if (text[i] === wordList[34] && text[i + 1] === wordList[34]) {
                result += 'an';
                i = i + 2;
            } else if (text[i] === wordList[51]) {
                result += 'am';
                i = i + 1
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[48]) {
                result += letter(text[i + 1]) + 'e';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 3] === wordList[59]) {
                result += letter(text[i + 1] + text[i + 2]) + 'e';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[59]) {
                result += letter(text[i + 1]) + 'e';
                i = i + 3;
            } else if (text[i] === wordList[62] && text[i + 3] === wordList[48]) {
                result += letter(text[i + 1]) + letter(text[i + 2]) + 'ae';
                i = i + 4;
            } else if (text[i] === wordList[62] && text[i + 2] === wordList[48]) {
                result += letter(text[i + 1]) + 'ae';
                i = i + 3;
            } else if (text[i] === wordList[62]) {
                result += letter(text[i + 1]) + 'ae';
                i = i + 2;
            } else if (text[i] === wordList[60] && text[i + 2] === wordList[34]) {
                result += letter(text[i + 1]) + 'ora';
                i = i + 3;
            } else if (text[i] === wordList[60] && text[i + 3] === wordList[48]) {
                result += letter(text[i + 1]) + 'o';
                i = i + 4;
            } else if (text[i] === wordList[60] && text[i + 2] === wordList[48]) {
                result += letter(text[i + 1]) + 'o';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[50] && text[i + 3] === wordList[48]) {
                result += letter(text[i + 1]) + 'o';
                i = i + 4;
            } else if (text[i] === wordList[60]) {
                result += letter(text[i + 1]) + 'o';
                i = i + 2;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[42] && text[i + 3] === wordList[48]) {
                result += letter(text[i + 1]) + 'oe';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[52]) {
                result += letter(text[i + 1]) + 'oe' + letter(text[i + 3]);
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[52]) {
                result += letter(text[i + 1]) + 'oe';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] !== wordList[55] && text[i + 3] === wordList[42]) {
                result += letter(text[i + 1] + text[i + 2]) + letter(text[i + 2]) + 'oe';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[42]) {
                result += letter(text[i + 1]) + 'oe';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[53] && text[i + 3] === wordList[33] && text[i + 4] === wordList[48]) {
                result += letter(text[i + 1]) + 'ia';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 3] === wordList[53] && text[i + 4] === wordList[33]) {
                result += letter(text[i + 1]) + letter(text[i + 2]) + 'ia';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[53] && text[i + 3] === wordList[33]) {
                result += letter(text[i + 1]) + 'ia';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[55] && text[i + 3] === wordList[42] && text[i + 4] === wordList[33]) {
                result += letter(text[i + 1]) + 'ueai';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[55] && text[i + 3] === wordList[42] && text[i + 4] === wordList[48]) {
                result += letter(text[i + 1]) + 'uea';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 3] === wordList[55] && text[i + 4] === wordList[42]) {
                result += letter(text[i + 1]) + letter(text[i + 2]) + 'uea';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[55] && text[i + 3] === wordList[42]) {
                result += letter(text[i + 1]) + 'uea';
                i = i + 4;
            } else if (text[i] === wordList[49] && text[i + 1] === wordList[36] && text[i + 2] === wordList[48]) {
                result += 'ua';
                i = i + 3;
            } else if (text[i] && text[i + 1] === wordList[36] && text[i + 2] === wordList[6]) {
                result += letter(text[i]) + 'uang';
                i = i + 3;
            } else if (text[i] === wordList[49] && text[i + 1] === wordList[36]) {
                result += 'ua';
                i = i + 2;
            } else if (text[i] && text[i + 1] === wordList[36] && text[i + 2] === wordList[24]) {
                result += letter(text[i]) + 'uan';
                i = i + 3;
            } else if (text[i] === wordList[63] && text[i + 2] === wordList[34] || text[i] === wordList[64] && text[i + 2] === wordList[34]) {
                result += letter(text[i + 1]) + letter(text[i + 2]) + 'ai';
                i = i + 3;
            } else if (text[i] === wordList[64] && text[i + 1] === wordList[36] && text[i + 2] === wordList[33]) {
                result += letter(text[i + 1]) + 'aiy';
                i = i + 3;
            } else if (text[i] === wordList[64] && text[i + 2] === wordList[33]) {
                result += letter(text[i + 1]) + 'ai';
                i = i + 3;
            } else if (text[i] === wordList[64] && text[i + 2] === wordList[24]) {
                result += letter(text[i + 1] + text[i + 2]) + 'ai';
                i = i + 3;
            } else if (text[i] === wordList[64] && text[i + 2] === wordList[32]) {
                result += letter(text[i + 1] + text[i + 2]) + 'ai';
                i = i + 3;
            } else if (text[i] === wordList[63] || text[i] === wordList[64]) {
                result += letter(text[i + 1]) + 'ai';
                i = i + 2;
            } else if (text[i] === wordList[49] && text[i + 1] === wordList[33]) {
                result += 'ai';
                i = i + 2;
            } else if (text[i] === wordList[50] && text[i + 1] === wordList[33]) {
                result += 'ai';
                i = i + 2;
            } else if (text[i] === wordList[58] && text[i + 3] === wordList[50]) {
                result += letter(text[i + 1]) + 'ao';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[50]) {
                result += letter(text[i + 1]) + 'ao';
                i = i + 3;
            } else if (text[i] === wordList[50] && text[i + 1] === wordList[36]) {
                result += 'ao';
                i = i + 2;
            } else if (text[i] === wordList[56] && text[i + 1] === wordList[33]) {
                result += 'ui';
                i = i + 2;
            } else if (text[i] === wordList[60] && text[i + 2] === wordList[33]) {
                result += letter(text[i + 1]) + 'oi';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[33]) {
                result += letter(text[i + 1]) + 'oei';
                i = i + 3;
            } else if (text[i] === wordList[36] && text[i + 1] === wordList[33]) {
                result += 'uai';
                i = i + 2;
            } else if (text[i] === wordList[52] && text[i + 1] === wordList[36]) {
                result += 'io';
                i = i + 2;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[59] && text[i + 3] === wordList[36]) {
                result += letter(text[i + 1]) + 'eo';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[36]) {
                result += letter(text[i + 1]) + 'eo';
                i = i + 3;
            } else if (text[i] === wordList[62] && text[i + 2] === wordList[59] && text[i + 3] === wordList[36]) {
                result += letter(text[i + 1]) + 'aeo';
                i = i + 4;
            } else if (text[i] === wordList[62] && text[i + 2] === wordList[36]) {
                result += letter(text[i + 1]) + 'aeo';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[53] && text[i + 3] === wordList[33] && text[i + 4] === wordList[36]) {
                result += letter(text[i + 1]) + 'iao';
                i = i + 5;
            } else if (text[i] && text[i + 1] === wordList[50] && text[i + 2] === wordList[12] || text[i] && text[i + 1] === wordList[50] && text[i + 2] === wordList[34]) {
                result += letter(text[i]) + 'an';
                i = i + 3;
            } else if (text[i] === wordList[48] || text[i] === wordList[49] || text[i] === wordList[50]) {
                result += 'a';
                i = i + 1;
            } else if (text[i] === wordList[52] || text[i] === wordList[53]) {
                result += 'i';
                i = i + 1;
            } else if (text[i] === wordList[54] || text[i] === wordList[55]) {
                result += 'ue';
                i = i + 1;
            } else if (text[i] === wordList[56] || text[i] === wordList[57]) {
                result += 'u';
                i = i + 1;
            } else if (text[i] === wordList[58]) {
                result += letter(text[i + 1]) + 'e';
                i = i + 2;
                // } else if (text[i] && text[i + 1] && text[i + 2] === wordList[52]) {
                //     result += letter(text[i]) + 'a';
                //     i = i + 1;
            } else if (text[i] && text[i + 1] && text[i + 2] === wordList[18] && text[i + 3] === wordList[61]) {
                result += letter(text[i]) + letter(text[i + 1]) + 'on';
                i = i + 2;
            } else if (text[i] === wordList[0] && text[i + 1] === wordList[19]) {
                result += letter(text[i]) + 'od';
                i = i + 2;
            } else if (text[i] === wordList[35] && text[i + 1] === wordList[32]|| text[i] === wordList[34] && text[i + 1] === wordList[32]|| text[i] === wordList[39] && text[i + 1] === wordList[32]) {
                result += letter(text[i]) + 'om';
                i = i + 2;
            } else if (text[i] === wordList[20] && text[i + 1] === wordList[24] || text[i] === wordList[3] && text[i + 1] === wordList[24] || text[i] === wordList[38] && text[i + 1] === wordList[34] || text[i] === wordList[0] && text[i + 1] === wordList[34]) {
                result += letter(text[i]) + 'on';
                i = i + 2;
            } else if (text[i] === wordList[42] && text[i + 1] === wordList[33]) {
                result += 'y';
                i = i + 2;
            } else if (text[i] === wordList[40] && text[i + 1] === wordList[24]) {
                result += 'n';
                i = i + 2;
            } else if (text[i] === wordList[40] && text[i + 1] === wordList[32]) {
                result += 'm';
                i = i + 2;
            } else if (text[i] === wordList[40] && text[i + 1] === wordList[35]) {
                result += 'l';
                i = i + 2;
            } else if (text[i] && text[i + 1] === wordList[34]) {
                result += letter(text[i]) + 'ora';
                i = i + 2;
            } else if (text[i] === wordList[40] && text[i + 1] === wordList[34]) {
                result += 'r';
                i = i + 2;
            } else if (text[i] === wordList[39] && text[i + 1] === wordList[32]&& text[i + 2] === wordList[49]) {
                result += 'sa';
                i = i + 1;
            } else if (text[i] && text[i + 1] === wordList[42] && text[i + 2] === wordList[33]) {
                result += letter(text[i]) + 'oy';
                i = i + 3;
            } else if (text[i] && text[i + 1] === wordList[18] && text[i + 2] === wordList[48]) {
                result += letter(text[i]) + 'ana';
                i = i + 3;
            } else if (text[i] === wordList[22] && text[i + 1] === wordList[40] && text[i + 2] === wordList[50] && text[i + 3] === wordList[34]) {
                result += 'thahran';
                i = i + 4;
            } else {
                result += letter(text[i]);
                i = i + 1;
            }
        }
        var result = check(result);
        res.status(200).json({
            status: true,
            data: result,
            length: text.length
        });
    }
}

function wordCut(val) {
    var chack = [];
    var sara = [
        '่',//อ่
        '้',//อ้
        '๊',//อ๊
        '๋',//อ๋
    ];
    var double = [];
    var result = '';
    for (i = 0; i < val.length; i++) {
        if (sara[0] === val[i] || sara[1] === val[i] || sara[2] === val[i] || sara[3] === val[i]) {
            result += '';
            // } else if (val[i] && sara[4] === val[i + 1]) { //check letter + -์ if have to remove
            //     result += '';
            //     i = i + 1;
        } else {
            result += val[i];
            double[0] = val[i];
        }
    }
    return result;
}

function check(val) {
    var result = '';
    for (i = 0; i < val.length; i++) {
        if (val[i] === wordList[61]) {
            result += '';
        } else {
            result += val[i];
        }
    }
    return result;
}

function letter(val) {
    if (val === wordList[0]) {
        result = 'k';
    } else if (val === wordList[1] || val === wordList[2] || val === wordList[3] || val === wordList[4] || val === wordList[5]) {
        result = 'kh';
    } else if (val === wordList[6]) {
        result = 'ng';
    } else if (val === wordList[7] || val === wordList[8] || val === wordList[9] || val === wordList[11]) {
        result = 'ch';
    } else if (val === wordList[10] || val === wordList[37] || val === wordList[38] || val === wordList[39]) {
        result = 's';
    } else if (val === wordList[12] || val === wordList[33]) {
        result = 'y';
    } else if (val === wordList[13] || val === wordList[19]) {
        result = 'd';
    } else if (val === wordList[14] || val === wordList[20]) {
        result = 't';
    } else if (val === wordList[21] || val === wordList[22] || val === wordList[23]) {
        result = 'th';
    } else if (val === wordList[18] || val === wordList[24]) {
        result = 'n';
    } else if (val === wordList[25]) {
        result = 'b';
    } else if (val === wordList[26]) {
        result = 'p';
    } else if (val === wordList[27] || val === wordList[29] || val === 31) {
        result = 'ph';
    } else if (val === wordList[28] || val === wordList[30]) {
        result = 'f';
    } else if (val === wordList[32] || val === wordList[40] + wordList[32]) {
        result = 'm';
    } else if (val === wordList[34]) {
        result = 'r';
    } else if (val === wordList[44] || val === wordList[45]) {
        result = 'rue';
    } else if (val === wordList[35] || val === wordList[41] || val === wordList[40] + wordList[35]) {
        result = 'l';
    } else if (val === wordList[46] || val === wordList[47]) {
        result = 'lue';
    } else if (val === wordList[36]) {
        result = 'w';
    } else if (val === wordList[42]) {
        result = 'o';
    } else if (val === wordList[40] || val === wordList[43]) {
        result = 'h';
    } else if (val === wordList[39] + wordList[32]) {
        result = 'sa';
    } else {
        if (val === ' ') {
            result = ' ';
        } else {
            result = val;
        }
    }
    return result;
}