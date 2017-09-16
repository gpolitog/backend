const device = {
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  desc: { type: String, default: 'enter a description' },
  settings: { type: Object }
};

//device types
const deviceTypes = {};

deviceTypes.mcp17 = {
  name: 'mcp17',
  label: 'I2C MCP 20017 chip',
  settings : {
  // bus address either hex or equivalent decimal
    i2cAddress : { type: Number, required: true, unique: true,
      fieldProps: { label: 'I2C Address', tip: 'enter hex address' } },
    defaultConfig: { type: String, required: true, default: 'output', fieldType: 'select',
      valid: ['toggle','momentary','input','output','custom'],
      fieldProps: {
        options: [{ label: 'toggle', value: 'toggle'},{ label: 'input', value: 'input'},{ label: 'output', value: 'output'},{ label: 'custom', value: 'custom'}],
        label: 'pins mode',
        tip: 'choose a mode for all pins on chip' } },
    iPinA : { type: Number,
      fieldProps: { label: 'SBC Pin Number - Port A' } },
    iPinB : { type: Number,
      fieldProps: { label: 'SBC Pin Number - Port B' } }
  }
};

deviceTypes.mcp08 = {
  name: 'mcp08',
  label: 'I2C MCP 20008 chip',
  settings : {
  // bus address either hex or equivalent decimal
    i2cAddress : { type: Number, required: true, unique: true, label: 'I2C Address', help: 'enter hex address' },
    // output, toggle, momentary, input - only toggle and momentary need interrupt pins
    defaultConfig: { type: String, required: true, default: 'output', valids: ['toggle','momentary','input','output'], label: 'pins mode', help: 'choose a mode for all pins on chip' },
    iPin : { type: Number, label: 'SBC Pin Number' },
  }
};

module.exports = { device, deviceTypes };
