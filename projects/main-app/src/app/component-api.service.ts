import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Component, ComponentOptions, remap, remapWithoutArrowFunction } from '@lib/domain';
import { ComponentAPIModel } from './model/component.api.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentApiService {

  constructor() { }

  private readonly remapProps: Array<[string, string]> = [
    ['id', 'id'],
    ['code', 'code'],
    ['name', 'name'],
    ['thumb', 'thumbnail'],
    ['minSize', 'minimumSize'],
    ['native', 'nativeComponent'],
    ['scripts', 'scripts'],
    ['styles', 'styles']
  ];

  private readonly rawItem: ComponentAPIModel = {
    code: 'ngx-component',
    id: '5676f062-8319-47a3-9f3d-347f4ffaf70f',
    minimumSize: 100,
    name: 'Component name',
    nativeComponent: true,
    scripts: ['/static/component/bundle.js'],
    styles: ['/static/component/bundle.css'],
    thumbnail: '/static/component/component-thumb.png'
  };

  retrieveEntity(): Observable<Component> {

    const newItem: Component = new Component();

    remap(this.remapProps, this.rawItem, newItem);

    return of(newItem);
  }

  retrieveEntityWithoutArrowFunction(): Observable<Component> {

    const newItem: Component = new Component();

    remapWithoutArrowFunction(this.remapProps, this.rawItem, newItem);

    return of(newItem);
  }
}
