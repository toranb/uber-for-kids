import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  classNames: ['ui-layout'],
  actions: {
    stop() {
      set(this, 'riders', []);
    },
    start() {
      set(this, 'riders', [
        {lat: 41.5911, lng: -93.611, name: 'Toran'},
        {lat: 41.5822, lng: -93.608, name: 'Michelle'},
        {lat: 41.5879, lng: -93.613, name: 'Tim'}
      ]);
    }
  }
});
