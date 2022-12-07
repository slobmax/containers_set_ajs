import Character from '../character';
import Team from '../app';

const team = new Team();
const bowman = new Character('Bowman', 'Bowman');
const undead = new Character('Undead', 'Undead');
const swordsman = new Character('Swordsman', 'Swordsman');

test('Проверка метода add', () => {
  const recieved = Array.from(team.add(bowman))[0];
  const expected = {
    name: 'Bowman',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(recieved).toEqual(expected);
});

test('Проверка выброса ошибки в методе add', () => {
  expect(() => team.add(bowman)).toThrow();
});

test('Проверка метода addAll', () => {
  const recieved = Array.from(team.addAll(undead, swordsman));
  const expected = [{
    name: 'Bowman',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  },
  {
    name: 'Undead',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  },
  {
    name: 'Swordsman',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  },
  ];
  expect(recieved).toEqual(expected);
});

test('Проверка метода toArray', () => {
  const recieved = team.toArray();
  const expected = Array.from(team.members);
  expect(recieved).toEqual(expected);
});
