// TODO: do we need TOC as well?  Maybe ComponentLike?
import type Component from '@glimmer/component';

/**
 * URL query parameters.
 *
 * @example
 * const params = {
 *   name: 'Joe',
 *   age: 43,
 * };
 */
export type QueryParams = Record<string, string | number | null | undefined>;

/**
 * A lazy-loaded component.
 *
 * @example
 * const lazyComp = () => import('./pages/home.gjs');
 */
export type LazyComponent = () => Promise<{ default: Component }>;

/**
 * Path and component to an application route. Path parameters are supported.
 *
 * @example
 * const routeAbout = {
 *   path: '/about',
 *   render: () => import('./pages/about.gjs'),
 * };
 *
 * const routeContest = {
 *   path: '/contests/{contestId}',
 *   render: () => import('./pages/contest-details.gjs'),
 * };
 */
export interface Route {
  /**
   * URL path to match. Path parameters are supported.
   *
   * @example
   * path: '/page1'
   *
   * path: '/page2/{name}/and/{age}'
   */
  path: string;
  /**
   * Function which lazy-loads the component to be rendered.
   *
   * @example
   * render: () => import('./pages/about.gjs')
   */
  render: LazyComponent;
}

/**
 * Router configuration.
 */
export interface RouterConf {
  /**
   * Base URL, as defined in vite.config.ts.
   *
   * @example
   * baseUrl: '/my-application'
   */
  baseUrl?: string;
  /**
   * Application routes.
   */
  routes: Route[];
  /**
   * Error 404 route.
   *
   * If not defined, a simple "404 - Not found" text will be displayed.
   *
   * @example
   * render404: () => import('./error404.gjs')
   */
  render404?: LazyComponent;
  /**
   * Text to be displayed if the route takes too long to load. This happens
   * sometimes in development mode, when the virtual server gets too busy.
   *
   * Defaults to "Loading...".
   */
  loadingText?: string;
}
