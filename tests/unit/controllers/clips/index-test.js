import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | clips/index', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:clips/index');
    assert.ok(controller);
  });
});
