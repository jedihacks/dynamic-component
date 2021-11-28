import { Component, Input } from '@angular/core';

import { LayoutComponentInterface } from '../../layout.component.interface';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Module Layout</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class ModuleLayoutComponent implements LayoutComponentInterface {
  @Input() data: any;
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/