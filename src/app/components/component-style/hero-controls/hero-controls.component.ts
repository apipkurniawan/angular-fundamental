import { Component, Input } from '@angular/core';
import { HeroStyle } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-controls',
  template: `
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button (click)="activate()">Activate</button>
  `,
})
export class HeroControlsComponent {
  @Input() hero!: HeroStyle;

  activate() {
    this.hero.active = true;
  }
}
