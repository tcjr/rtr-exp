import Component from '@glimmer/component';
import { pageTitle } from 'ember-page-title';
import { getQueryParams } from 'rtr-exp/lib/mini-router/utils';

export default class TimeInZone extends Component {
  get qp() {
    return getQueryParams();
  }

  <template>
    {{pageTitle "Time In Zone Page"}}
    time in zone page, zone:
    {{@pathParams.zone}}
    <hr />
    {{JSON.stringify this.qp}}
  </template>
}
