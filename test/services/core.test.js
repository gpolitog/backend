const assert = require('assert');
const app = require('../../src/app');

describe('\'core\' service', () => {
  it('registered the service', () => {
    const service = app.service('core');

    assert.ok(service, 'Registered the service');
  });
});
