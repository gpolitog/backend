const { Schema, types } = require('feathers-schema');

const Device = new Schema({
  name: { type: String, required: true, default: 'device name', unique: true },
  //type: { type: types.ObjectId, service: 'hardware' },
  desc: { type: String, default: 'describe the device here', unique: true }
});

const DeviceType = new Schema({
  name: { type: String, required: true, default: 'device type name', unique: true },
  bus: { type: String, required: true },

});

module.exports = { Device, DeviceType };
