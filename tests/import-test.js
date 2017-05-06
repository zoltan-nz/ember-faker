import { test } from "qunit";

import * as faker from "ember-faker";

test('faker is present in named exports from ember-faker', function(assert) {
  assert.ok(faker, 'faker should be exist as import');
});
