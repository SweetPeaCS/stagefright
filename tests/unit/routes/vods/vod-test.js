import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vods/vod', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vods/vod');
    assert.ok(route);
  });
});
