const device = {
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  desc: { type: String, default: 'enter a description' },
  settings: { type: Object }
};

//device types
const deviceTypes = {};

deviceTypes.sw16 = {
  category: 'switch',
  label: '16 Switch Board/Chip',
  desc: 'MCP 20017 Chip on Control Anything DIO board with interrupts',
  count: 16,
  settings: {
    i2cAddress : { type: Number, required: true, unique: true,
      fieldProps: { label: 'I2C Address', tip: 'enter address as decimal or hex - unique for IC2 bus' } },
    pinsConfig: { type: String, required: true, default: 'toggle',  fieldType: 'hidden' }, 
    iPinA: { type: Number,
      fieldProps: { label: 'SBC Pin Port A', tip: 'Pin Number on SBC(RPIi) connected to Port A Interrupt' } },
    iPinB: { type: Number,
      fieldProps: { label: 'SBC Pin Port B', tip: 'Pin Number on SBC(RPIi) connected to Port B Interrupt' } }
  }
};

deviceTypes.ry16 = {
  category: 'relay',
  label: '16 Relay Board/Chip',
  desc: 'MCP 20017 Chip on Control Anything Relay board ',
  count: 16,
  settings: {
    i2cAddress : { type: Number, required: true, unique: true,
      fieldProps: { label: 'I2C Address', tip: 'enter address as decimal or hex - unique for IC2 bus' } 
    },
    pinsConfig: { type: String, required: true, default: 'output',  fieldType: 'hidden' }
  }
};



module.exports = { device, deviceTypes };
