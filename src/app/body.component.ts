import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { LayoutDirective } from './layout.directive';
import { LayoutItem } from './layout-item.class';
import { LayoutComponentInterface } from './layout.component.interface';

@Component({
  selector: 'app-body',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template layoutHost></ng-template>
    </div>
  `
})
export class BodyPanelComponent implements OnInit, OnDestroy {
  @Input() ads: LayoutItem[] = [];

  currentAdIndex = -1;

  @ViewChild(LayoutDirective, {static: true}) layoutHost!: LayoutDirective;
  interval: number|undefined;

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const LayoutItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.layoutHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<LayoutComponentInterface>(LayoutItem.component);
    componentRef.instance.data = LayoutItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/