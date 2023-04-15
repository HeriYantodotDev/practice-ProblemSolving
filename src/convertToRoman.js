const digit1 = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
};

const digit2 = {
  1: 'X',
  4: 'XL',
  5: 'L',
  9: 'XC',
};

const digit3 = {
  1: 'C',
  4: 'CD',
  5: 'D',
  9: 'CM',
};

const digit4 = {
  1: 'M',
};

const digitArray = [digit1, digit2, digit3, digit4];

export function convertToRoman(num) {
  const numString = num.toString();
  const numSplit = numString.split('');
  let counter = 0;
  let answer = '';

  for (let i = numSplit.length - 1; i >= 0; i--) {
    const digit = numSplit[counter];
    const digitNumber = Number(digit);
    const romanLibrary = digitArray[i];

    if (digit in romanLibrary) {
      answer += romanLibrary[digit];
    }

    if (digitNumber >= 2 && digitNumber <= 3) {
      for (let i = 0; i < digitNumber; i++) {
        answer += romanLibrary[1];
      }
    }

    if (digitNumber >= 6 && digitNumber <= 8) {
      answer += romanLibrary[5];
      const multiplier = digitNumber - 5;
      for (let i = 0; i < multiplier; i++) {
        answer += romanLibrary[1];
      }
    }

    counter++;
  }
  return answer;
}
