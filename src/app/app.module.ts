import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './about-me/about-me.component';

const appRoute: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'Test2', component: Test2Component },
  { path: 'Test3', component: Test3Component },
  { path: 'Test4', component: Test4Component },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
