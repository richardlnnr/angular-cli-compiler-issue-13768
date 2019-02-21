import { populate, arrayPopulate } from '../base-functions';

export interface ComponentOptions {
  id: string;
  name: string;
  code: string;
  native: boolean;
  thumb?: string;
  minSize?: number;
  scripts: string[];
  styles?: string[];
}

class Component implements ComponentOptions {
  id: string;
  name: string;
  code: string;
  native: boolean;
  thumb?: string;
  minSize?: number;
  scripts: string[];
  styles?: string[];
}

const factory = (rawData: ComponentOptions) => {

  const component = new Component();

  populate([
    'id',
    'name',
    'code',
    'native',
    'thumb',
    'minSize'
  ], rawData, component);

  component.scripts = arrayPopulate('scripts', rawData, String);
  component.styles = arrayPopulate('styles', rawData, String);

  return component;
};

export {
  Component,
  factory as ComponentFactory
};
