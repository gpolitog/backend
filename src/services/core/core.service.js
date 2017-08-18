// Initializes the `core` service on path `/core`
const createService = require('feathers-nedb');
const createModel = require('../../models/core.model');
const hooks = require('./core.hooks');
const filters = require('./core.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'core',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/core', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('core');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
