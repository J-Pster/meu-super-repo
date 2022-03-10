const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragao = () => Math.random(15) * dragon.strength; 
const danoWarrior = () => Math.random(warrior.strength) * (warrior.strength * warrior.weaponDmg); 
const danoMago = () => {
  if (mage.mana < 15) return {dano: 'Não possui mana suficiente', mana: 0};
  return {dano: Math.random(mage.intelligence) * (mage.intelligence * 2), mana: 15};
};

const gerarDano = {
  dragao: danoDragao(),
  warrior: danoWarrior(),
  mago: danoMago(),
};

const gameActions = {
  // Crie as HOFs neste objeto.
};