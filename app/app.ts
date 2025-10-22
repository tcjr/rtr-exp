import Application from 'ember-strict-application-resolver';

import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
//import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

export default class App extends Application {
  modules = {
    ...import.meta.glob('./services/*', { eager: true }),

    // It appears that the application template must be explicitly listed here
    // and it will automatically be loaded and rendered.
    './templates/application': importSync('./templates/application.gts'),

    // It looks like Services from addons need to be explicitly listed when
    // using strict application resolver.
    './services/page-title': importSync('ember-page-title/services/page-title'),
  };
  //inspector = setupInspector(this);
}
