import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// component-lifecycle
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

// component-interaction
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

// component-style
import { HeroAppComponent } from './components/component-style/hero-app/hero-app.component';
import { HeroAppMainComponent } from './components/component-style/hero-app/hero-app-main.component';
import { HeroDetailsComponent } from './components/component-style/hero-details/hero-details.component';
import { HeroControlsComponent } from './components/component-style/hero-controls/hero-controls.component';
import { QuestSummaryComponent } from './components/component-style/quest-summary/quest-summary.component';
import { HeroTeamComponent } from './components/component-style/hero-team/hero-team.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    // component-lifecycle
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
    // component-interaction
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
    // component-style
    HeroAppComponent,
    HeroAppMainComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
    QuestSummaryComponent,
    HeroTeamComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
