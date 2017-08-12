const assert = require('assert');
const app = require('../../src/app');

describe('\'switches\' service', () => {
  it('registered the service', () => {
    const service = app.service('switches');

    assert.ok(service, 'Registered the service');
  });
});
