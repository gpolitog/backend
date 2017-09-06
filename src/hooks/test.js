// Outer function initializes the hook function
module.exports = function (options) {
  // The hook function itself is returned.
  return function(hook) {
    // const { method, type, data, service } = hook;
    const { data } = hook;
    console.log('service',hook.service.Model, options);
    const schemas = hook.service.Model.schemas;
    // let defaults = {};
    for (let property of schemas[data.doctype].properties) {
      let prop = property[Object.getOwnPropertySymbols(property)[1]];
      if (!data[property.key]) {
        data[property.key] =  prop.default ? prop.default : new prop.type();
      }
    }



    return hook;







  };
};
