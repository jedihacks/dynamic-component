import { Component, Input } from '@angular/core';

import { LayoutComponentInterface } from '../../layout.component.interface';
@Component({
  selector: 'portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.scss'],
})
export class PortalLayoutComponent implements LayoutComponentInterface {
  @Input() data: any;
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/