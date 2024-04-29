import Magician from '../magician';

describe('testing demon character creation', () => {
  it('testing the characters name', () => {
    const olivar = new Magician('Olivar');
    expect(olivar.name).toBe('Olivar');
  });

  it('testing the characters stoned', () => {
    const olivar = new Magician('Olivar');
    expect(olivar.stone).toBe(false);
  });

  it('testing the characters stoned', () => {
    const olivar = new Magician('Olivar');
    olivar.stone = true;
    expect(olivar.stone).toBe(true);
  });

  it('testing the characters finalAttack', () => {
    const olivar = new Magician('Olivar');
    olivar.attack = 2;
    expect(olivar.attack).toBe(85);
  });

  it('testing the characters finalAttack', () => {
    const olivar = new Magician('Olivar');
    olivar.attack = 1;
    expect(olivar.attack).toBe(100);
  });
});
