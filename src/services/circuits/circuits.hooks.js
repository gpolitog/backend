const  getschemas = require('../../hooks/getschemas.js')
//const  init = require('../../hooks/init.js');

const init = function (options) {
  // The hook function itself is returned.
  return function(hook) {
    // const { method, type, data, service } = hook;
    const { data, service } = hook
    const  schema = service.Model.schemas
    console.log('hook log\n', data, schema, options)
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
    return hook
  }
}

const change = function () {
  return function(hook) {
    const { id, data, service } = hook
    if ('request' in data){
      console.log('circuit change request made\n', id, data)
      service.emit('changeRequest', { request: data.request, id: id })
      hook.result = null // don't write it to db i
    }

    if ('on' in data){
      console.log('new circuit state\n', id, data.on)
      service.emit('changeComplete', { on: data.on, id: id })
    }

    return hook
  }
}

// const changeRequest = function () {
//   return function(hook) {
//     const { id, data, service } = hook
//     if ('request' in data){
//       console.log('circuit change request made\n', id, data)
//       service.emit('changeRequest', { request: data.request, id: id })
//     }
//     hook.result = null // don't write it to db it's just a request
//     return hook
//   }
// }
//
// const changeComplete = function () {
//   return function(hook) {
//     const { id, data, service } = hook
//     if ('on' in data){
//       console.log('new circuit state\n', id, data.on)
//       service.emit('changeComplete', { on: data.on, id: id })
//       return hook
//     }
//     return hook
//   }
// }

module.exports = {
  before: {
    // all: [ authenticate('jwt') ],
    find: [],
    get: [ getschemas() ],  // TODO: functions not passed must JSON.stringify and parse at the other end.
    create: [ init() ],
    update: [],
    patch: [ change() ],
    // patch: [ changeComplete(), changeRequest() ],
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
}
