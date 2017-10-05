const device = {
  name: { type: String, default: '', unique: true, required:true,
    fieldProps: { label: 'Name', tip: 'enter unique circuit name' }
  },
  desc: {type: String, default: '',
    fieldProps: { label: 'Description', tip: 'Describe Services' }
  },
  hardware: { type: String, required: true, fieldType: 'select',
    fieldProps: { disable: true, label: 'Hardware', tip: 'Must delete device and recreate to change this', options: [] }
  },
  category: { type: String, default: '', fieldType: 'hidden' }
};

// common settings to all devices
function addCommon (schema) {
  const settings = Object.assign({}, device);
  Object.assign(settings, schema.settings);
  schema.settings = settings;
}

// device info and settings to add to schema
const sw16 =  {
  category: 'switch',
  label: '16 Switch Board/Chip',
  boardDesc: 'MCP 20017 Chip on Control Anything DIO board with interrupts',
  count: 16,
  settings: {
    address : { type: Number, required: true, unique: true, default: 0x00,
      fieldProps: { label: 'I2C Address', tip: 'enter address as decimal or hex - unique for IC2 bus' } },
    pinsConfig: { type: String, required: true, default: 'toggle',  fieldType: 'hidden' },
    iPinA: { type: Number, default: 0,
      fieldProps: { label: 'SBC Pin Port A', tip: 'Pin Number on SBC(RPIi) connected to Port A Interrupt' } },
    iPinB: { type: Number, default: 0,
      fieldProps: { label: 'SBC Pin Port B', tip: 'Pin Number on SBC(RPIi) connected to Port B Interrupt' } }
  }
};
addCommon(sw16);

const ry16 =  {
  category: 'relay',
  label: '16 Relay Board/Chip',
  boardDesc: 'MCP 20017 Chip on Control Anything Relay board ',
  count: 16,
  settings: {
    address : { type: Number, required: true, unique: true, default: 0x00,
      fieldProps: { label: 'I2C Address', tip: 'enter address as decimal or hex - unique for IC2 bus' }
    },
    pinsConfig: { type: String, required: true, default: 'output',  fieldType: 'hidden' }
  }
};
addCommon(ry16);

module.exports = { sw16,ry16 };
