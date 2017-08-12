// Initializes the `switches` service on path `/switches`
const createService = require('feathers-nedb');
const createModel = require('../../models/switches.model');
const hooks = require('./switches.hooks');
const filters = require('./switches.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'switches',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/switches', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('switches');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
