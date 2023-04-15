export function rot13(str) {
  const splitString = str.split('');
  let result = '';

  splitString.forEach((item) => {
    if (isAphabetCharacter(item)) {
      const resultCode = cipherRot13(item);
      const resultString = String.fromCharCode(resultCode);
      result += resultString;
    } else {
      result += item;
    }
  });

  return result;
}

function isAphabetCharacter(item) {
  return /^[a-zA-Z]+$/.test(item);
}

function cipherRot13(str) {
  const A_CHAR_CODE = 65;
  const Z_CHAT_CODE = 90;
  const SHIFTER = 13;
  const BREAK_POINT = Z_CHAT_CODE - SHIFTER;
  const strCharCode = str.charCodeAt(0);
  let resultCode;

  if (strCharCode > BREAK_POINT && strCharCode < Z_CHAT_CODE + 1) {
    resultCode = A_CHAR_CODE + (strCharCode - BREAK_POINT - 1);
  } else if (strCharCode >= A_CHAR_CODE && strCharCode <= BREAK_POINT) {
    resultCode = strCharCode + SHIFTER;
  }

  return resultCode;
}
