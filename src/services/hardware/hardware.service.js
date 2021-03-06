// Initializes the `hardware` service on path `/hardware`
const createService = require('feathers-nedb')
const createModel = require('../../helpers/nedb.model')
const hooks = require('./hardware.hooks')
const filters = require('./hardware.filters')
// const schemas = require('../../schemas/hardware.schemas.js');

module.exports = function () {
  const app = this
  const Model = createModel(app, 'hardware')
  const paginate = app.get('paginate')

  const options = {
    name: 'hardware',
    Model,
    paginate,
  }

  // Initialize our service with any options it requires
  app.use('/hardware', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hardware')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }

}
