import { type RouterConf } from './lib/mini-router/types.ts';

export const routerConf: RouterConf = {
  routes: [
    { path: '/', render: () => import('./pages/home.gjs') },
    { path: '/another', render: () => import('./pages/another.gjs') },
  ],
};
