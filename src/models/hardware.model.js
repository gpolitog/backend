const NeDB = require('nedb');
const path = require('path');
const schemas = require('../schemas/hardware.schemas.js');

module.exports = function (app) {
  const dbPath = app.get('nedb');
  const db = new NeDB({
    filename: path.join(dbPath, 'hardware.db'),
    autoload: true
  });

  db.schemas = schemas;

  return db;
};
