
const NeDB = require('nedb')
// const path = require('path')

module.exports = function (app, service) {
// TODO find application root and save to app object for user here instead of __dirname
  // with this file in /helpers directory
  const schemas = require(__dirname +  '/../' + app.get('nedb').schemaPath + '/' + service + '.schemas.js')

  const dbPath = app.get('nedb').path
  const Model = new NeDB({
    filename: `${dbPath}/${service}.db`,
    autoload: true
  })
  Model.schemas = schemas

  if(app.get('nedb').autoCompact) {
    Model.persistence.setAutocompactionInterval(app.get('nedb').autoCompactInterval)
  }

  return Model
}
