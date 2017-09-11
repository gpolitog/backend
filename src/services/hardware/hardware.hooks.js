//const { authenticate } = require('feathers-authentication').hooks;
// const  device = require('../../schemas/hardware.schemas.js').Device.hooks;
// const  test = require('../../hooks/test.js');
const  getschemas = require('../../hooks/getschemas.js');
const  init = require('../../hooks/init.js');


module.exports = {
  before: {
    // all: [ authenticate('jwt') ],
    find: [],
    get: [getschemas()],
    create: [ init('an option') ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
