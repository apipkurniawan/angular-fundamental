export class HeroTemplate {
  static nextId = 0;

  static heroes: HeroTemplate[] = [
    new HeroTemplate(
      0,
      'Hercules',
      'happy',
      new Date(1970, 1, 25),
      'https://www.imdb.com/title/tt0065832/',
      325
    ),
    new HeroTemplate(1, 'Dr Nice', 'happy'),
    new HeroTemplate(2, 'Narco', 'sad'),
    new HeroTemplate(3, 'Windstorm', 'confused'),
    new HeroTemplate(4, 'Magneta'),
  ];

  constructor(
    public id = HeroTemplate.nextId++,
    public name?: string,
    public emotion?: string,
    public birthdate?: Date,
    public url?: string,
    public rate = 100
  ) {}

  clone(): HeroTemplate {
    return Object.assign(new HeroTemplate(), this);
  }
}
