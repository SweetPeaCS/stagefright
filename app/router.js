import EmberRouter from '@ember/routing/router';
import config from 'stage-fright-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('clips', function() {
    this.route('clip', { path: '/:clip_id' });
  });
  this.route('vods', function() {
    this.route('vod', { path: '/:vod_id' }, function() {
      this.route('clips');
    });
  });
  this.route('analyse');
});
