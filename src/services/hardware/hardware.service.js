// Initializes the `hardware` service on path `/hardware`
const createService = require('feathers-nedb');
const createModel = require('../../models/hardware.model');
const hooks = require('./hardware.hooks');
const filters = require('./hardware.filters');
// const schemas = require('../../schemas/hardware.schemas.js');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'hardware',
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/hardware', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hardware');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }

  // let defaults = {};
  // for (let property of schemas['device'].properties) {
  //   let propDefault = property[Object.getOwnPropertySymbols(property)[1]];
  //   let pDefault =  propDefault.default ? propDefault.default : new propDefault.type('2342304955');
  //   defaults[property.key] = pDefault;
  // }
  //
  // service.docTypes = {};
  // service.docTypes['device'] = {};
  // service.docTypes['device'].defaults = defaults;
  // console.log(service);
  // console.log(service.docTypes['device'].defaults);
};
