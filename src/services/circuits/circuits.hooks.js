const  getschemas = require('../../hooks/getschemas.js');
//const  init = require('../../hooks/init.js');

const init = function (options) {
  // The hook function itself is returned.
  return function(hook) {
    // const { method, type, data, service } = hook;
    const { data, service } = hook;
    const  schema = service.Model.schemas;
    console.log('hook log\n', data, schema, options);
    // validate name unique
    for (let field in schema) {
      console.log('field, schema', field, schema[field])
      if (!data[field]) {
        data[field] = schema[field].default  // try to initize on type instead of default
        // console.log(field, data[field])
      }
    }
    data.on = false  // maintain circuit state
    //console.log('doc to be written', hook.data);
    return hook;
  };
};

const stateChange = function (options) {
  // The hook function itself is returned.
  return function(hook) {
    // const { method, type, data, service } = hook;
    const { id, data, service } = hook;
    //console.log('state change hook log\n', id, data);
    service.get(id)
      .then (current => { 
        if (data.on !== current.on) {
          current.on = data.on
          // console.log('firing state change emitter with', current.name)
          service.emit('stateChange', {
		    data: current	
          });
        }
      })
    return hook;
  };
};

// TODO: Update hook should emit circuit change and listen for emitted relay change.


module.exports = {
  before: {
    // all: [ authenticate('jwt') ],
    find: [],
    get: [ getschemas() ],  // TODO: functions not passed must JSON.stringify and parse at the other end.
    create: [ init() ],
    update: [],
    patch: [ stateChange() ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [ ],
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



