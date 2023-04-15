import { telephoneCheck } from '../src/telephoneCheck';

describe('Return true if the passed string looks like a valid US phone number.', () => {
  test('telephoneCheck("1 555-555-5555") should return true.', () => {
    const result = telephoneCheck('1 555-555-5555');
    expect(result).toBe(true);
  });

  test('telephoneCheck("1 555-555-5555") should return true.', () => {
    const result = telephoneCheck('1 555-555-5555');
    expect(result).toBe(true);
  });

  test('telephoneCheck("1 (555) 555-5555") should return true.', () => {
    const result = telephoneCheck('1 (555) 555-5555');
    expect(result).toBe(true);
  });

  test('telephoneCheck("5555555555") should return true.', () => {
    const result = telephoneCheck('5555555555');
    expect(result).toBe(true);
  });

  test('Waiting:telephoneCheck("555-555-5555") should return true.', () => {
    const result = telephoneCheck('555-555-5555');
    expect(result).toBe(true);
  });

  test('telephoneCheck("(555)555-5555") should return true.', () => {
    const result = telephoneCheck('(555)555-5555');
    expect(result).toBe(true);
  });

  test('telephoneCheck("1(555)555-5555") should return true.', () => {
    const result = telephoneCheck('1(555)555-5555');
    expect(result).toBe(true);
  });

  test('telephoneCheck("555-5555") should return false.', () => {
    const result = telephoneCheck('555-5555');
    expect(result).toBe(false);
  });

  test('telephoneCheck("5555555") should return false.', () => {
    const result = telephoneCheck('5555555');
    expect(result).toBe(false);
  });

  test('telephoneCheck("1 555)555-5555") should return false.', () => {
    const result = telephoneCheck('1 555)555-5555');
    expect(result).toBe(false);
  });

  test('telephoneCheck("1 555 555 5555") should return true.', () => {
    const result = telephoneCheck('1 555 555 5555');
    expect(result).toBe(true);
  });

  test('Waiting:telephoneCheck("1 456 789 4444") should return true.', () => {
    const result = telephoneCheck('1 456 789 4444');
    expect(result).toBe(true);
  });

  test('telephoneCheck("123**&!!asdf#") should return false.', () => {
    const result = telephoneCheck('123**&!!asdf#');
    expect(result).toBe(false);
  });

  test('telephoneCheck("55555555") should return false.', () => {
    const result = telephoneCheck('55555555');
    expect(result).toBe(false);
  });

  test('Waiting:telephoneCheck("(6054756961)") should return false.', () => {
    const result = telephoneCheck('(6054756961)');
    expect(result).toBe(false);
  });

  test('telephoneCheck("2 (757) 622-7382") should return false.', () => {
    const result = telephoneCheck('2 (757) 622-7382');
    expect(result).toBe(false);
  });

  test('Waiting:telephoneCheck("0 (757) 622-7382") should return false.', () => {
    const result = telephoneCheck('0 (757) 622-7382');
    expect(result).toBe(false);
  });

  test('telephoneCheck("-1 (757) 622-7382") should return false.', () => {
    const result = telephoneCheck('-1 (757) 622-7382');
    expect(result).toBe(false);
  });

  test('Waiting:telephoneCheck("2 757 622-7382") should return false.', () => {
    const result = telephoneCheck('2 757 622-7382');
    expect(result).toBe(false);
  });

  test('telephoneCheck("10 (757) 622-7382") should return false.', () => {
    const result = telephoneCheck('10 (757) 622-7382');
    expect(result).toBe(false);
  });

  test('Waiting:telephoneCheck("27576227382") should return false.', () => {
    const result = telephoneCheck('27576227382');
    expect(result).toBe(false);
  });

  test('Waiting:telephoneCheck("(275)76227382") should return false.', () => {
    const result = telephoneCheck('(275)76227382');
    expect(result).toBe(false);
  });

  test('telephoneCheck("2(757)6227382") should return false.', () => {
    const result = telephoneCheck('2(757)6227382');
    expect(result).toBe(false);
  });

  test('telephoneCheck("2(757)622-7382") should return false.', () => {
    const result = telephoneCheck('2(757)622-7382');
    expect(result).toBe(false);
  });

  test('Waiting:telephoneCheck("555)-555-5555") should return false.', () => {
    const result = telephoneCheck('555)-555-5555');
    expect(result).toBe(false);
  });

  test('telephoneCheck("(555-555-5555") should return false.', () => {
    const result = telephoneCheck('(555-555-5555');
    expect(result).toBe(false);
  });

  test('telephoneCheck("(555)5(55?)-5555") should return false.', () => {
    const result = telephoneCheck('(555)5(55?)-5555');
    expect(result).toBe(false);
  });

  test('telephoneCheck("55 55-55-555-5") should return false.', () => {
    const result = telephoneCheck('55 55-55-555-5');
    expect(result).toBe(false);
  });

  test('telephoneCheck("11 555-555-5555") should return false.', () => {
    const result = telephoneCheck('11 555-555-5555');
    expect(result).toBe(false);
  });
});
