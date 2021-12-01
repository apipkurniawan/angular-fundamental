import {
  Component,
  Directive,
  Input,
  TemplateRef,
  ContentChild,
  HostBinding,
  HostListener,
  Injector,
  AfterViewInit,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AdItem } from './models/ad-item';
import { AdService } from './services/ad.service';
import { PopupService } from '../app/services/popup.service';
import { PopupComponent } from '../app/components/angular-elements/popup.component';

import { HeroTemplate } from 'src/app/models/template';
import { trackChanges } from './utils/template';

export enum Color {
  Red,
  Green,
  Blue,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    'a[href] {display: block; padding: 10px 0;}',
    'a:hover {text-decoration: none;}',
    'h2 {margin: 0;}',
  ],
})
export class AppComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based

  /* ----------------------------------------------------- */
  /* TEMPLATE */
  ngOnInit() {
    this.resetHeroes();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  ngAfterViewInit() {
    // Detect effects of NgForTrackBy
    trackChanges(this.heroesNoTrackBy, () => this.heroesNoTrackByCount++);
    trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }

  @ViewChildren('noTrackBy') heroesNoTrackBy!: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy!: QueryList<ElementRef>;

  actionName = 'Go for it';
  badCurly = 'bad curly';
  classes = 'special';
  help = '';

  alert(msg?: string) {
    window.alert(msg);
  }
  callFax(value: string) {
    this.alert(`Faxing ${value} ...`);
  }
  callPhone(value: string) {
    this.alert(`Calling ${value} ...`);
  }
  canSave = true;

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach((h) => (h.id += 10 * this.heroIdIncrement++));
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }

  clicked = '';
  clickMessage = '';
  clickMessage2 = '';

  Color = Color;
  color = Color.Red;
  colorToggle() {
    this.color = this.color === Color.Red ? Color.Blue : Color.Red;
  }

  currentHero!: HeroTemplate;

  updateCurrentHeroName(event: Event) {
    this.currentHero.name = (event.target as any).value;
  }

  deleteHero(hero?: HeroTemplate) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }

  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  fontSizePx = 16;

  title = 'Template Syntax';

  getVal(): number {
    return 2;
  }

  name: string = HeroTemplate.heroes[0].name || '';
  hero!: HeroTemplate; // defined to demonstrate template context precedence
  heroes: HeroTemplate[] = [];

  // trackBy change counting
  heroesNoTrackByCount = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;

  heroIdIncrement = 1;

  // heroImageUrl = 'https://wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
  // Public Domain terms of use: https://wpclipart.com/terms.html
  heroImageUrl = '../assets/images/hero.png';
  // villainImageUrl = 'https://www.clker.com/cliparts/u/s/y/L/x/9/villain-man-hi.png'
  // Public Domain terms of use https://www.clker.com/disclaimer.html
  villainImageUrl = '../assets/images/villain.png';

  iconUrl = '../assets/images/ng-logo.jpeg';
  isActive = false;
  isSpecial = true;
  isUnchanged = true;

  get nullHero(): HeroTemplate | null {
    return null;
  }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target class is ' + (event.target as HTMLElement).className
      : '';
    this.alert('Click me.' + evtMsg);
  }

  onSave(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target is ' + (event.target as HTMLElement).textContent
      : '';
    this.alert('Saved.' + evtMsg);
    if (event) {
      event.stopPropagation();
    }
  }

  onSubmit(data: any) {
    /* referenced but not used */
  }

  product = {
    name: 'frimfram',
    price: 42,
  };

  // updates with fresh set of cloned heroes
  resetHeroes() {
    this.heroes = HeroTemplate.heroes.map((hero) => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }

  setUppercaseName(name: string) {
    this.currentHero.name = name.toUpperCase();
  }

  currentClasses: Record<string, boolean> = {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

  currentStyles: Record<string, string> = {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }

  trackByHeroes(index: number, hero: HeroTemplate): number {
    return hero.id;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
  /* TEMPLATE */
  /* ----------------------------------------------------- */

  /* ----------------------------------------------------- */
  /* ANGULAR-ELEMENTS */
  // constructor(injector: Injector, public popup: PopupService) {
  //   // Convert `PopupComponent` to a custom element.
  //   const PopupElement = createCustomElement(PopupComponent, { injector });
  //   // Register the custom element with the browser.
  //   customElements.define('popup-element', PopupElement);
  // }
  /* ANGULAR-ELEMENTS */
  /* ----------------------------------------------------- */

  /* ----------------------------------------------------- */
  /* DYNAMIC-COMPONENT */
  // ads: AdItem[] = [];

  // constructor(private adService: AdService) {}

  // ngOnInit() {
  //   this.ads = this.adService.getAds();
  // }
  /* DYNAMIC-COMPONENT */
  /* ----------------------------------------------------- */

  /* ----------------------------------------------------- */
  /* COMPONENT-DIRECTIVE */
  // currentItem = 'Television';

  // lastChanceItem = 'Beanbag';
  // items = ['item1', 'item2', 'item3', 'item4'];
  // wishlist = ['Drone', 'Computer'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }

  // crossOffItem(item: string) {
  //   console.warn(`Parent says: crossing off ${item}.`);
  // }

  // buyClearanceItem(item: string) {
  //   console.warn(`Parent says: buying ${item}.`);
  // }

  // saveForLater(item: string) {
  //   console.warn(`Parent says: saving ${item} for later.`);
  // }

  // addToWishList(wish: string) {
  //   console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
  //   this.wishlist.push(wish);
  //   console.warn(this.wishlist);
  // }
  /* COMPONENT-DIRECTIVE */
  /* ----------------------------------------------------- */
}

/* ----------------------------------------------------- */
/* CONTENT-PROJECTION */
// @Directive({
//   selector: 'button[appExampleZippyToggle]',
// })
// export class ZippyToggleDirective {
//   @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
//   @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;
//   @HostListener('click') toggleZippy() {
//     this.zippy.expanded = !this.zippy.expanded;
//   }
//   constructor(public zippy: ZippyComponent) {}
// }

// @Directive({
//   selector: '[appExampleZippyContent]',
// })
// export class ZippyContentDirective {
//   constructor(public templateRef: TemplateRef<unknown>) {}
// }

// let nextId = 0;

// @Component({
//   selector: 'app-example-zippy',
//   templateUrl: './example-zippy.template.html',
// })
// export class ZippyComponent {
//   contentId = `zippy-${nextId++}`;
//   @Input() expanded = false;
//   @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
// }
/* CONTENT-PROJECTION */
/* ----------------------------------------------------- */
