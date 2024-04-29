import Daemon from '../daemon';

describe('testing demon character creation', () => {
  it('testing the characters name', () => {
    const olivar = new Daemon('Olivar');
    expect(olivar.name).toBe('Olivar');
  });

  it('testing the characters stoned', () => {
    const olivar = new Daemon('Olivar');
    expect(olivar.stoned).toBe(false);
  });

  it('testing the characters stoned', () => {
    const olivar = new Daemon('Olivar');
    olivar.stoned = true;
    expect(olivar.stoned).toBe(true);
  });

  it('testing the characters finalAttack', () => {
    const olivar = new Daemon('Olivar');
    olivar.attack = 2;
    expect(olivar.attack).toBe(85);
  });

  it('testing the characters finalAttack', () => {
    const olivar = new Daemon('Olivar');
    olivar.attack = 1;
    expect(olivar.attack).toBe(100);
  });
});
