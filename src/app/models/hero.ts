export class Hero {
  constructor(public name: string) {}
}

export class HeroStyle {
  active = false;
  constructor(public name: string, public team: string[]) {}
}

export interface MyHero {
  name: string;
}

export const MYHEROES = [
  { name: 'Dr IQ' },
  { name: 'Magneta' },
  { name: 'Bombasto' },
];
