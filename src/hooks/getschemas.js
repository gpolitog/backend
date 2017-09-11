// Outer function initializes the hook function
module.exports = function () {
  // The hook function itself is returned.
  return function(hook) {
    // console.log('hook-result',hook.result);
    // console.log('hook-method',hook.method);
    // console.log('hook-data',hook.data);
    // console.log('hook-type',hook.type);
    // console.log('hook-id',hook.id);
    if (hook.id === 'schemas') {
      // setting hook result will send schemas to client
      hook.result = hook.service.Model.schemas;
    }

    //  console.log('hook-service',service);

    return hook;







  };
};
