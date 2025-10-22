import Component from '@glimmer/component';
import { pageTitle } from 'ember-page-title';
import { service } from '@ember/service';

export default class Another extends Component {
  @service misc;
  name = 'another';
  <template>
    {{pageTitle "Another Page"}}
    {{this.name}}
    page
    {{this.misc.greeting}}
  </template>
}

console.log('LOADED another.gjs');
