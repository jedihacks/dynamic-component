import { Injectable } from '@angular/core';

import { PortalLayoutComponent } from './dynamic-layouts/portal-layout/portal-layout.component';
import { ModuleLayoutComponent } from './dynamic-layouts/module-layout/module-layout.component';
import { LayoutItem } from './layout-item.class';

@Injectable()
export class LayoutService {
  getAds() {
    return [
      new LayoutItem(
        ModuleLayoutComponent,
        { name: 'Module Layout', bio: 'Brave as they come' }
      ),
      // new LayoutItem(
      //   PortalLayoutComponent,
      //   { headline: 'Portal Layout', body: 'Submit your resume today!' }
      // )
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/