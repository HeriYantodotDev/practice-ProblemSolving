import { convertToRoman } from '../src/convertToRoman';

describe('Convert numeral to Roman numeral', () => {
  test('should return the string I. ', () => {
    const expected = convertToRoman(1);
    expect(expected).toBe('I');
  });

  test('should return the string IV. ', () => {
    const expected = convertToRoman(4);
    expect(expected).toBe('IV');
  });

  test('should return the string V. ', () => {
    const expected = convertToRoman(5);
    expect(expected).toBe('V');
  });

  test('should return the string V. ', () => {
    const expected = convertToRoman(9);
    expect(expected).toBe('IX');
  });

  test('should return the string X. ', () => {
    const expected = convertToRoman(10);
    expect(expected).toBe('X');
  });

  test('should return the string XL. ', () => {
    const expected = convertToRoman(40);
    expect(expected).toBe('XL');
  });

  test('should return the string L. ', () => {
    const expected = convertToRoman(50);
    expect(expected).toBe('L');
  });

  test('should return the string XC. ', () => {
    const expected = convertToRoman(90);
    expect(expected).toBe('XC');
  });

  test('should return the string C. ', () => {
    const expected = convertToRoman(100);
    expect(expected).toBe('C');
  });

  test('should return the string CD. ', () => {
    const expected = convertToRoman(400);
    expect(expected).toBe('CD');
  });

  test('should return the string D. ', () => {
    const expected = convertToRoman(500);
    expect(expected).toBe('D');
  });

  test('should return the string CM. ', () => {
    const expected = convertToRoman(900);
    expect(expected).toBe('CM');
  });

  test('should return the string M. ', () => {
    const expected = convertToRoman(1000);
    expect(expected).toBe('M');
  });

  test('Return string II', () => {
    const expected = convertToRoman(2);
    expect(expected).toBe('II');
  });

  test('should return the string III.', () => {
    const expected = convertToRoman(3);
    expect(expected).toBe('III');
  });

  test('should return the string IV. ', () => {
    const expected = convertToRoman(4);
    expect(expected).toBe('IV');
  });

  test('should return the string XII', () => {
    const expected = convertToRoman(12);
    expect(expected).toBe('XII');
  });

  test(' should return the string XVI', () => {
    const expected = convertToRoman(16);
    expect(expected).toBe('XVI');
  });

  test(' should return the string XXIX', () => {
    const expected = convertToRoman(29);
    expect(expected).toBe('XXIX');
  });

  test('should return the string XLIV.', () => {
    const expected = convertToRoman(44);
    expect(expected).toBe('XLIV');
  });

  test('should return the string XLV', () => {
    const expected = convertToRoman(45);
    expect(expected).toBe('XLV');
  });

  test('should return the string LXVIII', () => {
    const expected = convertToRoman(68);
    expect(expected).toBe('LXVIII');
  });

  test('should return the string LXXXIII', () => {
    const expected = convertToRoman(83);
    expect(expected).toBe('LXXXIII');
  });

  test('should return the string XCVII', () => {
    const expected = convertToRoman(97);
    expect(expected).toBe('XCVII');
  });

  test(' should return the string XCIX', () => {
    const expected = convertToRoman(99);
    expect(expected).toBe('XCIX');
  });

  test('should return the string CD', () => {
    const expected = convertToRoman(400);
    expect(expected).toBe('CD');
  });

  test('should return the string DI', () => {
    const expected = convertToRoman(501);
    expect(expected).toBe('DI');
  });

  test('should return the string DCXLIX', () => {
    const expected = convertToRoman(649);
    expect(expected).toBe('DCXLIX');
  });

  test('should return the string DCCXCVIII', () => {
    const expected = convertToRoman(798);
    expect(expected).toBe('DCCXCVIII');
  });

  test('should return the string DCCCXCI', () => {
    const expected = convertToRoman(891);
    expect(expected).toBe('DCCCXCI');
  });

  test('should return the string MIV', () => {
    const expected = convertToRoman(1004);
    expect(expected).toBe('MIV');
  });

  test('should return the string MVI', () => {
    const expected = convertToRoman(1006);
    expect(expected).toBe('MVI');
  });

  test(' should return the string MXXIII', () => {
    const expected = convertToRoman(1023);
    expect(expected).toBe('MXXIII');
  });

  test(' should return the string MMXIV', () => {
    const expected = convertToRoman(2014);
    expect(expected).toBe('MMXIV');
  });

  test('should return the string MMMCMXCIX', () => {
    const expected = convertToRoman(3999);
    expect(expected).toBe('MMMCMXCIX');
  });
});
