const assert = require('assert');
const app = require('../../src/app');

describe('\'hardware\' service', () => {
  it('registered the service', () => {
    const service = app.service('hardware');

    assert.ok(service, 'Registered the service');
  });
});
