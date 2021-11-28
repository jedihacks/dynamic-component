import { Injectable } from '@angular/core';

import { PortalLayoutComponent } from './layout/dynamic-layouts/portal-layout/portal-layout.component';
import { ModuleLayoutComponent } from './layout/dynamic-layouts/module-layout/module-layout.component';
import { LayoutItem } from './layout/layout-item.class';

@Injectable()
export class AdService {
  getAds() {
    return [
      new LayoutItem(
        ModuleLayoutComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new LayoutItem(
        ModuleLayoutComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new LayoutItem(
        PortalLayoutComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new LayoutItem(
        PortalLayoutComponent,
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