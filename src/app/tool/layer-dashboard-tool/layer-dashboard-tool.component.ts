import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ToolComponent } from '../tool-component-interface';
import { OnMount } from '../../core-modules/dynamic-html';
import { OpenUrl } from '../../util/open-url';
/**
 * LayerDashboardToolComponent
 * <app-layer-dashboard-tool  [shared]="layer"></app-layer-dashboard-tool>
 */
@Component({
  selector: 'app-layer-dashboard-tool',
  template: `
              <dfn attr.data-info="{{ 'tools.dashboard' | translate }}" #innerContent>
                <button type="button" class="btn" *ngIf="layer.dashboard != null" (click)="goTo(layer.dashboard)"><i class="material-icons md-dark ">assessment</i></button>
                <ng-content></ng-content>
              </dfn>
            `
})
export class LayerDashboardToolComponent extends ToolComponent implements OnInit, OnMount, OpenUrl {
  @Input() shared: any;  
  @ViewChild('innerContent') innerContent: ElementRef;
  
  dynamicOnMount(attr: Map<string, any>, innerHTML: string, el: any) {
      this.innerContent.nativeElement.innerHTML = innerHTML;    
      this.layer = this.shared;           
  }

  constructor() { 
      super();
  }

  ngOnInit() {
    this.layer = this.shared;
  }

  goTo(url:string) {        
    window.open(url, "_blank");
  }
}
