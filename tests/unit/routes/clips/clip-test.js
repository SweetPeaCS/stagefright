import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | clips/clip', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:clips/clip');
    assert.ok(route);
  });
});
