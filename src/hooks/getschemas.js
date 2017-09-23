// Sends back corresponding attached schemas when get with id 'schema' is called from client
module.exports = function () {
  return function(hook) {
    if (hook.id === 'schemas') {
      // setting hook result will send schemas to client
      hook.result = hook.service.Model.schemas;
    console.log('getting schema', hook.result)
    }
    return hook;
  };
};
