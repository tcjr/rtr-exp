import Service from '@ember/service';

export default class MiscService extends Service {
  greeting = 'Hello from MiscService!';
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:misc')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('misc') declare altName: MiscService;`.
declare module '@ember/service' {
  interface Registry {
    misc: MiscService;
  }
}
