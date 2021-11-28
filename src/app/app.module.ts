import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { BodyPanelComponent } from './layout/components/body/body.component';
import { HeroProfileComponent } from './hero-profile.component';
import { LayoutDirective } from './layout.directive';
import { AdService } from './ad.service';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';

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