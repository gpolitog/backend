//const { authenticate } = require('feathers-authentication').hooks;
// const  device = require('../../schemas/hardware.schemas.js').Device.hooks;
// const  test = require('../../hooks/test.js');
const  getschemas = require('../../hooks/getschemas.js');


//const  init = require('../../hooks/init.js');
// Hardware Specific Hooks

const init = function (options) {
  // The hook function itself is returned.
  return function(hook) {
    // const { method, type, data, service } = hook;
    const { data, service } = hook;
    const { device, deviceTypes } = service.Model.schemas;
    console.log('hook\n',device, deviceTypes, options);
    // validate name unique
    // validate type one of device types
    // initialize description

    for (let key in device) {
      console.log(key);
      if (!data[key]) {
// need to fix making a new non-null instance from type
        data[key] =  device[key].default ? device[key].default : new device[key].type;
      }
    }
    data.category =  deviceTypes[data.type].category
    const settings = deviceTypes[data.type].settings;
    for (let skey in settings) {
      console.log(skey);
      if (!data[skey]) {
// need to fix making a new non-null instance from type
        data.settings[skey] =  settings[skey].default ? settings[skey].default : settings[skey].type(0)
      }
    }
    console.log(hook.data);
    return hook;
  };
};

module.exports = {
  before: {
    // all: [ authenticate('jwt') ],
    find: [],
    get: [getschemas()],
    create: [ init() ],
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
