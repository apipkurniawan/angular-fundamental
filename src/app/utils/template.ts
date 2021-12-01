import { ElementRef, QueryList } from '@angular/core';

// helper to track changes to viewChildren
export function trackChanges(
  views: QueryList<ElementRef>,
  changed: () => void
) {
  let oldRefs = views.toArray();
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
    const changedRefs = changes.toArray();
    // Check if every changed Element is the same as old and in the same position
    const isSame = oldRefs.every(
      (v, i) => v.nativeElement === changedRefs[i].nativeElement
    );
    if (!isSame) {
      oldRefs = changedRefs;
      // wait a tick because called after views are constructed
      setTimeout(changed, 0);
    }
  });
}
