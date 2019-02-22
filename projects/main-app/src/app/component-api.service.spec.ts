import { TestBed } from '@angular/core/testing';

import { ComponentApiService } from './component-api.service';
import { Component } from '@lib/domain';

describe('ComponentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentApiService = TestBed.get(ComponentApiService);
    expect(service).toBeTruthy();
  });

  it('get', () => {
    const service: ComponentApiService = TestBed.get(ComponentApiService);
    service.retrieveEntity().subscribe((component) => {
      expect(component instanceof Component).toBeTruthy();
      expect(component.code).toBeDefined();
    });
  });
});
