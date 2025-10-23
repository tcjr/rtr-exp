import Component from '@glimmer/component';
import { pageTitle } from 'ember-page-title';
import { service } from '@ember/service';
import { getQueryParams } from 'rtr-exp/lib/mini-router/utils';
import { getPathParams } from 'rtr-exp/lib/mini-router/state';

export default class Another extends Component {
  @service misc;
  name = 'another';

  get pp() {
    return getPathParams();
  }

  get qp() {
    return getQueryParams();
  }

  <template>
    {{pageTitle "Another Page"}}
    {{this.name}}
    page
    <hr />
    {{this.misc.greeting}}
    <hr />
    {{JSON.stringify this.qp}}
    <hr />
    {{JSON.stringify this.pp}}
  </template>
}

console.log('LOADED another.gjs');
