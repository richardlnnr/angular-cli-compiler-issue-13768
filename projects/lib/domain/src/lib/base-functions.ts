const populate = <T>(props: string[], rawData: any, entity: T & { [key: string]: any }): void => {
  if (!rawData) { return; }
  props.forEach(prop => {
    if (!rawData.hasOwnProperty(prop)) { return; }
    entity[prop] = rawData[prop];
  });
};

const arrayPopulate = <T>(prop: string, rawData: any, factory: Function): T[] => (
  Array.isArray(rawData[prop])
    ? rawData[prop].map((item: any) => factory(item) as T)
    : [] as T[]
);

const remap = <T>(props: Array<[string, string]>, rawData: any, entity: T & { [key: string]: any }): void => {
  if (!rawData) { return; }
  props.forEach(prop => {
    if (!rawData.hasOwnProperty(prop[1])) { return; }
    entity[prop[0]] = rawData[prop[1]];
  });
};

export {
  populate,
  arrayPopulate,
  remap
};
