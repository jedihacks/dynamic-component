import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './layout/dynamic-layouts/portal-layout/hero-job-ad.component';
import { HeroProfileComponent } from './layout/dynamic-layouts/module-layout/hero-profile.component';
import { LayoutItem } from './layout/layout-item.class';

@Injectable()
export class AdService {
  getAds() {
    return [
      new LayoutItem(
        HeroProfileComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new LayoutItem(
        HeroProfileComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new LayoutItem(
        HeroJobAdComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new LayoutItem(
        HeroJobAdComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/