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

const turnoWarrior = () => {
  const danoGerado = gerarDano.warrior;
  dragon.healthPoints -= danoGerado;
  warrior.damage = danoGerado;
};

const turnoDragon = () => {
  const danoGerado = gerarDano.dragao;
  warrior.healthPoints -= danoGerado;
  mage.healthPoints -= danoGerado;
  dragon.damage = danoGerado;
};

const turnoMago = () => {
  const danoGerado = gerarDano.mago;
  dragon.healthPoints -= danoGerado.dano;
  mage.damage = danoGerado.dano;
  mage.mana -= danoGerado.mana;
};

const gameActions = {
  turno: {
    warrior: turnoWarrior(),
    mago: turnoMago(),
    dragao: turnoDragon(),
  },

  battle: () => {
    gameActions.turno.warrior;
    gameActions.turno.mago;
    gameActions.turno.dragao;

    console.log('Resultado da Batalha:')
    console.log('Warrior:')
    console.table(warrior);
    console.log('Mago:')
    console.table(mage);
    console.log('Dragão:')
    console.table(dragon);
  },
};

gameActions.battle();