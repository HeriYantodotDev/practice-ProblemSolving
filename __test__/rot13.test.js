import { rot13 } from '../src/rot13';

describe('Rot 13 test', () => {
  test('rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP', () => {
    const expected = rot13('SERR PBQR PNZC');
    expect(expected).toBe('FREE CODE CAMP');
  });

  test('rot13("SERR CVMMN!") should decode to the string FREE PIZZA!', () => {
    const expected = rot13('SERR CVMMN!');
    expect(expected).toBe('FREE PIZZA!');
  });

  test('rot13("SERR YBIR?") should decode to the string FREE LOVE?', () => {
    const expected = rot13('SERR YBIR?');
    expect(expected).toBe('FREE LOVE?');
  });

  test('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
    const expected = rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
    expect(expected).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});
