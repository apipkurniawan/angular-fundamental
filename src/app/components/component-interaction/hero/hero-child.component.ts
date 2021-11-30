import { Component, Input } from '@angular/core';
import { MyHero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{ hero.name }} says:</h3>
    <p>I, {{ hero.name }}, am at your service, {{ masterName }}.</p>
  `,
})
export class HeroChildComponent {
  @Input() hero!: MyHero;
  @Input('master') masterName = ''; // tslint:disable-line: no-input-rename
}
