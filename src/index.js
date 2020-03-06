const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';
  let add = '0'.repeat(expr.length % 10);
  arr = (add + expr).split('');
  while (arr.length > 0) {
    let letter = arr.splice(0, 10);
    let morse = '';
    if (letter[0] === '*') {
      result += ' ';
    } else {
      while (letter.length > 0) {
        let one = (letter.splice(0, 2)).join('');
        switch (one) {
          case '10': morse += '.'; break;
          case '11': morse += '-';
        }

      }
      result += MORSE_TABLE[morse];
    }
  }
  return result;
}

module.exports = {
  decode
}