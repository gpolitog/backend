const assert = require('assert');
const app = require('../../src/app');

describe('\'circuits\' service', () => {
  it('registered the service', () => {
    const service = app.service('circuits');

    assert.ok(service, 'Registered the service');
  });
});
