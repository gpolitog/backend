const NeDB = require('nedb');
const path = require('path');
const schemas = require('../schemas/switch.schemas.js');

module.exports = function (app) {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'switches.db'),
    autoload: true
  });

  Model.schemas = schemas;

  return Model;
};
