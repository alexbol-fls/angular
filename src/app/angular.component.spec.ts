import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularAppComponent } from '../app/angular.component';

beforeEachProviders(() => [AngularAppComponent]);

describe('App: Angular', () => {
  it('should create the app',
      inject([AngularAppComponent], (app: AngularAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular works!\'',
      inject([AngularAppComponent], (app: AngularAppComponent) => {
    expect(app.title).toEqual('angular works!');
  }));
});
