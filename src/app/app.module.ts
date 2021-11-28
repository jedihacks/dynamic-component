import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './layout/dynamic-layouts/portal-layout/hero-job-ad.component';
import { BodyPanelComponent } from './layout/master/body/body.component';
import { HeroProfileComponent } from './layout/dynamic-layouts/module-layout/hero-profile.component';
import { LayoutDirective } from './layout/layout.directive';
import { AdService } from './ad.service';
import { FooterComponent } from './layout/master/footer/footer.component';
import { HeaderComponent } from './layout/master/header/header.component';

@NgModule({
  imports: [ BrowserModule ],
  providers: [ AdService ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyPanelComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    LayoutDirective
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/