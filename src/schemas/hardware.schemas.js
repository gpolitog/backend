const device = {
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  desc: { type: String },
  fields: { type: Object }
};

//device types
const deviceTypes = {};

deviceTypes.mcp17 = {
  name: 'mcp17',
  label: 'I2C MCP 20017 chip',
  fields : {
  // bus address either hex or equivalent decimal
    i2cAddress : { type: Number, required: true, unique: true, label: 'I2C Address', help: 'enter hex address' },
    // chip type 08 or 17
    type: { type: Number, required: true, default: 17, valids:['08','17'], label: 'chip', help: 'choose an mcp chip type'},
    // output, toggle, momentary, input - only toggle and momentary need interrupt pins
    defaultConfig: { type: String, required: true, default: 'output', valids: ['toggle','momentary','input','output'], label: 'pins mode', help: 'choose a mode for all pins on chip' },
    iPinA : { type: Number, label: 'SBC Pin Number' },
    iPinB : { type: Number, label: 'SBC Pin Number' }
  }
};

deviceTypes.mcp08 = {
  name: 'mcp08',
  label: 'I2C MCP 20008 chip',
  fields : {
  // bus address either hex or equivalent decimal
    i2cAddress : { type: Number, required: true, unique: true, label: 'I2C Address', help: 'enter hex address' },
    // chip type 08 or 17
    type: { type: Number, required: true, default: 17, valids:['08','17'], label: 'chip', help: 'choose an mcp chip type'},
    // output, toggle, momentary, input - only toggle and momentary need interrupt pins
    defaultConfig: { type: String, required: true, default: 'output', valids: ['toggle','momentary','input','output'], label: 'pins mode', help: 'choose a mode for all pins on chip' },
    iPin : { type: Number, label: 'SBC Pin Number' },
  }
};

module.exports = { device, deviceTypes };
