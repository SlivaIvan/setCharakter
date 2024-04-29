import Character from '../character';

describe('Character', () => {
  describe('constructor', () => {
    it('should initialize a character with default values', () => {
      const character = new Character('Warrior');
      expect(character.baseAttack).toBe(100);
      expect(character.type).toBe('Warrior');
      expect(character.stone).toBe(false);
      expect(character.finalAttack).toBe(null);
      expect(character.arrCoefficient).toEqual([1.0, 0.9, 0.8, 0.7, 0.6]);
      character.attack = 2;
      expect(character.attack).toBe(90);
    });
    it('testing the characters attack', () => {
      const character = new Character('Warrior');
      character.attack = 2;
      expect(character.attack).toBe(90);
    });
    it('testing the characters stoned', () => {
      const character = new Character('Warrior');
      character.stoned = true;
      expect(character.stoned).toBe(true);
    });

    it('testing the characters stoned', () => {
      const character = new Character('Warrior');
      expect(character.stoned).toBe(false);
    });

    it('testing the characters stoned', () => {
      const character = new Character('Warrior');
      expect(character.attack).toBe(null);
    });

    it('testing the characters stoned', () => {
      const character = new Character('Warrior');
      character.attack = 'a';
      expect(character.attack).toBe(null);
    });
  });
});
