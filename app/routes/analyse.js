import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class AnalyseRoute extends Route {
    async model() {
      return RSVP.hash({
        vods: this.store.findAll('vod'),
        clips: this.store.findAll('clip'),
        tags: this.store.findAll('category'),
      })
    }


}
