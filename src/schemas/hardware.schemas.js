const { Schema } = require('feathers-schema');

const device = new Schema({
  name: { type: String, required: true, default: 'a unique device name', unique: true },
  type: { type: String, service: 'hardware' },
  desc: { type: String, default: 'a device description', unique: true }
});

const deviceType = new Schema({
  name: { type: String, required: true, default: 'device type name', unique: true },
  bus: { type: String, required: true },

});

module.exports = { device, deviceType };
