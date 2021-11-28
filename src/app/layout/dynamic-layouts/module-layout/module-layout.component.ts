import { Component, Input } from '@angular/core';

import { LayoutComponentInterface } from '../../layout.component.interface';

@Component({
  selector: 'module-layout',
  templateUrl: './module-layout.component.html',
  styleUrls: ['./module-layout.component.scss'],
})
export class ModuleLayoutComponent implements LayoutComponentInterface {
  @Input() data: any;
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/