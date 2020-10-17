import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    BehaviorSubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
