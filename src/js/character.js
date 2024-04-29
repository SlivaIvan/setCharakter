export default class Character {
  constructor(type) {
    this.baseAttack = 100;
    this.type = type;
    this.stone = false;
    this.finalAttack = null;
    this.arrCoefficient = [1.0, 0.9, 0.8, 0.7, 0.6];
  }

  set stoned(stone) {
    this.stone = stone;
  }

  get stoned() {
    return this.stone;
  }

  set attack(distance) {
    let result = this.baseAttack * (this.arrCoefficient[Math.min((distance), 5) - 1]);
    const nameChar = ['Magician', 'Daemon'].includes(this.type);

    if (Number.isNaN(result)) {
      result = null;
    }
    if (nameChar === true) {
      result -= (Math.log2(distance) * 5);
    }

    this.finalAttack = result;
  }

  get attack() {
    return this.finalAttack;
  }
}
