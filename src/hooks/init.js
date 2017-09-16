// Outer function initializes the hook function
module.exports = function (options) {
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
        data[key] =  device[key].default ? device[key].default : new device[key].type;
      }
    }
    const settings = deviceTypes[data.type].settings;
    for (let skey in settings) {
      console.log(skey);
      if (!data[skey]) {
        data.settings[skey] =  settings[skey].default ? settings[skey].default : settings[skey].type(0)
      }
    }
    console.log(hook.data);
    return hook;
  };
};
