import Component from '@glimmer/component';
import type { RouterConf } from './types';
import routerState from './state';
import type Owner from '@ember/owner';
import { getPromiseState } from 'reactiveweb/get-promise-state';

const join = (parts: string[] | undefined): string => {
  if (!parts) {
    return '/';
  }
  return '/ ' + parts.filter((part) => part.length > 0).join(' / ');
};

export interface RouterSignature {
  Args: {
    config?: RouterConf;
  };
}

export class Router extends Component<RouterSignature> {
  constructor(owner: Owner, args: RouterSignature['Args']) {
    super(owner, args);
    if (args.config) {
      routerState.init(args.config);
    }
  }

  get routeComponentState() {
    return getPromiseState(routerState.curUserRoute?.render);
  }

  <template>
    This is the router.

    <pre>
      {{#if @config}}
        {{JSON.stringify @config}}
      {{else}}
        No config provided.
      {{/if}}
    </pre>

    <hr />

    <div>
      Current Path:
      {{join routerState.curUserRoute.pathParts}}
    </div>

    <hr />

    <div>
      {{log "routeComponentState is" this.routeComponentState}}
      {{#if this.routeComponentState.isLoading}}
        Loading...
      {{else if this.routeComponentState.error}}
        Error loading route component
      {{else if this.routeComponentState.resolved}}
        {{! component helper here? }}
        {{log "resolved.default:" this.routeComponentState.resolved.default}}
        {{#let this.routeComponentState.resolved.default as |RouteComponent|}}
          <RouteComponent />
        {{/let}}
      {{/if}}
    </div>
  </template>
}
