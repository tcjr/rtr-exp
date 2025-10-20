import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

import { autoRouter } from './lib/auto-router-plugin.mts';

export default defineConfig({
  plugins: [
    classicEmberSupport(),

    autoRouter(),

    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});
