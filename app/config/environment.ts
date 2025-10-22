//import loadConfigFromMeta from '@embroider/config-meta-loader';
import { assert } from '@ember/debug';

//const config = loadConfigFromMeta('rtr-exp') as unknown;

const config = {
  modulePrefix: 'rtr-exp',
  environment: 'development',
  rootURL: '/',
  locationType: 'history',
  EmberENV: {
    EXTEND_PROTOTYPES: false,
    FEATURES: {},
    _APPLICATION_TEMPLATE_WRAPPER: false,
    _DEFAULT_ASYNC_OBSERVERS: true,
    _JQUERY_INTEGRATION: false,
    _NO_IMPLICIT_ROUTE_MODEL: true,
    _TEMPLATE_ONLY_GLIMMER_COMPONENTS: true,
  },
  APP: {},
};

assert(
  'config is not an object',
  typeof config === 'object' && config !== null
);
assert(
  'modulePrefix was not detected on your config',
  'modulePrefix' in config && typeof config.modulePrefix === 'string'
);
assert(
  'locationType was not detected on your config',
  'locationType' in config && typeof config.locationType === 'string'
);
assert(
  'rootURL was not detected on your config',
  'rootURL' in config && typeof config.rootURL === 'string'
);
assert(
  'APP was not detected on your config',
  'APP' in config && typeof config.APP === 'object'
);

console.log('Loaded app/config/environment:', config);

export default config as {
  modulePrefix: string;
  podModulePrefix?: string;
  locationType: string;
  rootURL: string;
  APP: Record<string, unknown>;
} & Record<string, unknown>;
