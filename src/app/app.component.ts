import {
  Component,
  Directive,
  Input,
  TemplateRef,
  ContentChild,
  HostBinding,
  HostListener,
} from '@angular/core';

import { AdItem } from './models/ad-item';
import { AdService } from './services/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'latihan angular';

  /* ----------------------------------------------------- */
  /* DYNAMIC-COMPONENT */
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
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
