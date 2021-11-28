import { Component, OnInit } from '@angular/core';

import { LayoutService } from './layout/layout.service';
import { LayoutItem } from './layout/layout-item.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent implements OnInit {
  layouts: LayoutItem[] = [];

  constructor(private LayoutService: LayoutService) {}

  ngOnInit() {
    this.layouts = this.LayoutService.getLayouts();
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/