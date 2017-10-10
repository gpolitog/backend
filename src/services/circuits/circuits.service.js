// Initializes the `circuits` service on path `/circuits`
const createService = require('feathers-nedb')
const createModel = require('../../helpers/nedb.model')
const hooks = require('./circuits.hooks')
const filters = require('./circuits.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app, 'circuits')
  const paginate = app.get('paginate')

  const options = {
    name: 'circuits',
    Model,
    events: ['changeRequest', 'changeComplete' ],  // custom event
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/circuits', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('circuits')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
