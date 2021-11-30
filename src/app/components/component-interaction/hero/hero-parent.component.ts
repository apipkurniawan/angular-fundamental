import { Component } from '@angular/core';
import { MYHEROES } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{ master }} controls {{ heroes.length }} heroes</h2>

    <app-hero-child *ngFor="let hero of heroes" [hero]="hero" [master]="master">
    </app-hero-child>
  `,
})
export class HeroParentComponent {
  heroes = MYHEROES;
  master = 'Master';
}
