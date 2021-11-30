import { Component, Input } from '@angular/core';
import { HeroStyle } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-details',
  template: `
    <h2>{{ hero.name }}</h2>
    <app-hero-team [hero]="hero"></app-hero-team>
    <ng-content></ng-content>
  `,
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent {
  @Input() hero!: HeroStyle;
}
