import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { getQuery } from '@ember/routing/lib/location-utils';
import { pageTitle } from 'ember-page-title';
import { Router } from 'rtr-exp/lib/mini-router/router';
import { navigate } from 'rtr-exp/lib/mini-router/state';
import { getQueryParams } from 'rtr-exp/lib/mini-router/utils';
import { routerConf } from 'rtr-exp/mini-router-config';

const goto = (path: string) => {
  // const qp = { ...getQueryParams(), death: 'and taxes' };
  // navigate(path, qp);
  navigate(path);
};

<template>
  {{pageTitle "RtrExp"}}
  <h2>Welcome</h2>

  <Router @config={{routerConf}} />

  <hr />
  <ul>
    <li>
      <button type="button" {{on "click" (fn goto "/")}}>Home</button>
    </li>
    <li>
      <button type="button" {{on "click" (fn goto "/another")}}>Another Page</button>
    </li>
    <li>
      <button type="button" {{on "click" (fn goto "/time/EST")}}>Time in EST</button>
    </li>
    <li>
      <button type="button" {{on "click" (fn goto "/time/PST")}}>Time in PST</button>
    </li>
    <li>
      <Link @to="/time/CST" class="link">Time in CST</Link>
    </li>
  </ul>
</template>
