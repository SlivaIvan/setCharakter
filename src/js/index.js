import Magician from './magician';
import Daemon from './daemon';

const ivan = new Magician('Ivan');
const alex = new Daemon('Alex');

ivan.attack(1);
alex.attack(2);
