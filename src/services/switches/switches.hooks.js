// const { authenticate } = require('feathers-authentication').hooks;
const  getSchemas = require('../../hooks/getschemas.js');
// const  init = require('../../hooks/init.js');

const init = function (options) {
  // The hook function itself is returned.
  return function(hook) {
    // const { method, type, data, service } = hook;
    const { data, service, params } = hook;
    const  schemas = service.Model.schemas;
    const  schema = schemas[data.type];
    console.log('hook log\n', data.name, data.type, schema);
    // validate name unique
    for (let field in schema) {
      // console.log('field, schema', field, schema[field])
      if (!data[field]) {
        data[field] = schema[field].default;  // TODO initialize on type instead of default if no default
        console.log(field, data[field]);
      }
    }
    if (data.type !== 'view') { data.on = false; }
    //console.log('doc to be written', hook.data);
    return hook;
  };
};

module.exports = {
  before: {
    //  all: [ authenticate('jwt') ],
    find: [],
    get: [ getSchemas() ],  // TODO: functions not passed must JSON.stringify and parse at the other end.
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
