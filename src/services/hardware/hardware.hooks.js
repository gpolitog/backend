//const { authenticate } = require('feathers-authentication').hooks;
const  getschemas = require('../../hooks/getschemas.js');

// Hardware Specific Hooks

const init = function (options) {
  // The hook function itself is returned.
  return function(hook) {
    // const { method, type, data, service } = hook;
    const { data, service } = hook;
    const schema = service.Model.schemas[data.hardware];
    // console.log('hook\n',schema, data);
    // validate name unique
    // validate type one of device types
    // initialize description

    for (let field in schema.settings) {
      // console.log('field, schema', field, schema[field])
      if (!data[field]) {
        data[field] = schema.settings[field].default;  // TODO initialize on type instead of default if no default
        console.log(field, data[field]);
      }
    }
    console.log('category',schema.category);
    data.category = schema.category;

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
