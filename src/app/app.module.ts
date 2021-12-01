import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

/* COMPONENT-LIFECYCLE */
import { AfterContentParentComponent } from './components/component-lifecycle/after-content/after-content-parent.component';
import { AfterContentComponent } from './components/component-lifecycle/after-content/after-content.component';
import { ChildComponent } from './components/component-lifecycle/child/child.component';
import { AfterViewParentComponent } from './components/component-lifecycle/after-view/after-view-parent.component';
import { AfterViewComponent } from './components/component-lifecycle/after-view/after-view.component';
import { ChildViewComponent } from './components/component-lifecycle/child/child-view.component';
import { CounterParentComponent } from './components/component-lifecycle/counter/counter-parent.component';
import { MyCounterComponent } from './components/component-lifecycle/counter/counter.component';
import { DoCheckParentComponent } from './components/component-lifecycle/do-check/do-check-parent.component';
import { DoCheckComponent } from './components/component-lifecycle/do-check/do-check.component';
import { OnChangesParentComponent } from './components/component-lifecycle/on-changes/on-changes-parent.component';
import { OnChangesComponent } from './components/component-lifecycle/on-changes/on-changes.component';
import { PeekABooParentComponent } from './components/component-lifecycle/peek-a-boo/peek-a-boo-parent.component';
import { PeekABooComponent } from './components/component-lifecycle/peek-a-boo/peek-a-boo.component';
import { SpyParentComponent } from './components/component-lifecycle/spy/spy.component';
import { SpyDirective } from './directives/spy.directive';
/* COMPONENT-LIFECYCLE */

/* COMPONENT-INTERACTION */
import { AstronautComponent } from './components/component-interaction/mission-control/astronaut.component';
import {
  CountdownLocalVarParentComponent,
  CountdownViewChildParentComponent,
} from './components/component-interaction/countdown/countdown-parent.component';
import { CountdownTimerComponent } from './components/component-interaction/countdown/countdown-timer.component';
import { HeroChildComponent } from './components/component-interaction/hero/hero-child.component';
import { HeroParentComponent } from './components/component-interaction/hero/hero-parent.component';
import { MissionControlComponent } from './components/component-interaction/mission-control/missioncontrol.component';
import { NameChildComponent } from './components/component-interaction/name/name-child.component';
import { NameParentComponent } from './components/component-interaction/name/name-parent.component';
import { VersionChildComponent } from './components/component-interaction/version/version-child.component';
import { VersionParentComponent } from './components/component-interaction/version/version-parent.component';
import { VoterComponent } from './components/component-interaction/votetaker/voter.component';
import { VoteTakerComponent } from './components/component-interaction/votetaker/votetaker.component';
/* COMPONENT-INTERACTION */

/* COMPONENT-STYLE */
import { HeroAppComponent } from './components/component-style/hero-app/hero-app.component';
import { HeroAppMainComponent } from './components/component-style/hero-app/hero-app-main.component';
import { HeroDetailsComponent } from './components/component-style/hero-details/hero-details.component';
import { HeroControlsComponent } from './components/component-style/hero-controls/hero-controls.component';
import { QuestSummaryComponent } from './components/component-style/quest-summary/quest-summary.component';
import { HeroTeamComponent } from './components/component-style/hero-team/hero-team.component';
/* COMPONENT-STYLE */

/* COMPONENT-DIRECTIVE */
import { ItemDetailComponent } from './components/component-directive/item-detail/item-detail.component';
import { ItemOutputComponent } from './components/component-directive/item-output/item-output.component';
import { InputOutputComponent } from './components/component-directive/input-output/input-output.component';
import { InTheMetadataComponent } from './components/component-directive/in-the-metadata/in-the-metadata.component';
import { AliasingComponent } from './components/component-directive/aliasing/aliasing.component';
/* COMPONENT-DIRECTIVE */

/* CONTENT-PROJECTION */
// import {
//   ZippyComponent,
//   ZippyContentDirective,
//   ZippyToggleDirective,
// } from './app.component';
import { ZippyBasicComponent } from './components/content-projection/zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './components/content-projection/zippy-multislot/zippy-multislot.component';
import { ZippyNgprojectasComponent } from './components/content-projection/zippy-ngprojectas/zippy-ngprojectas.component';
/* CONTENT-PROJECTION */

/* DYNAMIC-COMPONENT */
import { HeroJobAdComponent } from './components/dynamic-component/hero-job-ad/hero-job-ad.component';
import { AdBannerComponent } from './components/dynamic-component/ad-banner/ad-banner.component';
import { HeroProfileComponent } from './components/dynamic-component/hero-profile/hero-profile.component';
import { AdService } from './services/ad.service';
import { AdDirective } from './directives/ad.directive';
/* DYNAMIC-COMPONENT */

/* ANGULAR-ELEMENTS */
import { PopupService } from './services/popup.service';
/* ANGULAR-ELEMENTS */

/* TEMPLATE */
import {
  BigHeroDetailComponent,
  HeroDetailComponent,
} from './template/hero/hero-detail.component';
import { ClickDirective, ClickDirective2 } from './directives/click.directive';
import { HeroFormComponent } from './template/hero/hero-form.component';
import { heroSwitchComponents } from './template/hero/hero-switch.components';
import { SizerComponent } from './template/sizer/sizer.component';
import { SvgComponent } from './template/svg/svg.component';
/* TEMPLATE */

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    /* COMPONENT-LIFECYCLE */
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    CounterParentComponent,
    MyCounterComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective,
    /* COMPONENT-INTERACTION */
    AstronautComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponent,
    CountdownLocalVarParentComponent,
    HeroChildComponent,
    HeroParentComponent,
    MissionControlComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoteTakerComponent,
    VoterComponent,
    /* COMPONENT-STYLE */
    HeroAppComponent,
    HeroAppMainComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
    QuestSummaryComponent,
    HeroTeamComponent,
    /* COMPONENT-DIRECTIVE */
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent,
    InTheMetadataComponent,
    AliasingComponent,
    /* CONTENT-PROJECTION */
    // ZippyComponent,
    // ZippyToggleDirective,
    // ZippyContentDirective,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyNgprojectasComponent,
    /* DYNAMIC-COMPONENT */
    HeroJobAdComponent,
    HeroProfileComponent,
    AdBannerComponent,
    AdDirective,
    /* TEMPLATE */
    BigHeroDetailComponent,
    HeroDetailComponent,
    HeroFormComponent,
    heroSwitchComponents,
    ClickDirective,
    ClickDirective2,
    SizerComponent,
    SvgComponent,
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  providers: [AdService, PopupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
