import Character from '../character';
import Team from '../team';

describe('Team', () => {
  it('should add a character to the team', () => {
    const team = new Team();
    const character = new Character('Den');
    team.add(character);
    expect(team.toArray()).toEqual([character]);
  });

  it('should not allow adding the same character twice', () => {
    const team = new Team();
    const character = new Character('Den');
    team.add(character);
    expect(() => team.add(character)).toThrow('Ошибка, такой персонаж уже есть');
  });

  it('should add all characters to the team', () => {
    const team = new Team();
    const character1 = new Character('Den');
    const character2 = new Character('Anya');
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
  });
});
