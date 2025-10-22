import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { pageTitle } from 'ember-page-title';
import { Router } from 'rtr-exp/lib/mini-router/router';
import { navigate } from 'rtr-exp/lib/mini-router/state';
import { routerConf } from 'rtr-exp/mini-router-config';

const goto = (path: string) => {
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
  </ul>
</template>
