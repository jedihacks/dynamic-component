import { Component, Input } from '@angular/core';

import { LayoutComponentInterface } from '../../layout.component.interface';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements LayoutComponentInterface {
  @Input() data: any;
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/