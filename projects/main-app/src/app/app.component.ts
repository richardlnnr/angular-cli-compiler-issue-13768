import { Component, OnInit } from '@angular/core';
import { ComponentApiService } from './component-api.service';
import { ComponentOptions } from '@lib/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  component: ComponentOptions;

  constructor(private componentApi: ComponentApiService) {
  }

  ngOnInit() {
    this.componentApi.retrieveEntity().subscribe((component: ComponentOptions) => {
      // In production mode, the component object come without their properties
      // When I change the optimization parameter to false, that works
      // "optimization": false
      this.component = component;
    });
  }
}
