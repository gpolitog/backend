const virtual = {

  name: { default: '', unique: true,
    fieldProps: { label: 'Name', tip: 'enter unique circuit name' }
  },
  desc: { default: '',
    fieldProps: { label: 'Description', tip: 'Describe Services' }
  },
  circuits: { default: [], fieldType: 'option-group',
    fieldProps: { label: 'Circuits', tip: 'Select circuits associated with this switch', inline: true, type: 'toggle', options: [] }
  }
};



const physicalExtras = {

  mode: { default: 'toggle' , fieldType: 'select',
    fieldProps: { label: 'Switch Mode', tip: 'Select Switch Mode Type',
      options: [
        {label: 'Toggle', value: 'toggle'},
        {label: 'On/Off', value: 'onoff'},
        {label: 'Momentary', value: 'momentary'},
      ]}
  },
  // TODO make this another doc type so users can edit this list - for now disable
  location: { default: '1' , fieldType: 'hidden',
    fieldProps: { label: 'Location in Buidling', tip: 'Select building location',
      options: [
        {label: 'First Floor', value: '1'},
        {label: 'Second Floor', value: '2'},
        {label: 'Outside', value: 'outside'}

      ]}
  },
  bankid: { default: '', fieldType: 'select',
    fieldProps: { label: 'Bank/Board', tip: 'Select Bank/Board', options: [] }
  },
  port: { default: 'A', fieldType: 'select',
    fieldProps: { label: 'Port', tip: 'Select a Port',
      options: [
        {label: 'Port A', value: 'A'},
        {label: 'Port B', value: 'B'}
      ]}
  },
  pin: { default: 1,
    fieldProps: { label: 'Relay/Pin Number',min: 1, max: 8, step: 1 }
    //tip: 'Select a relay/pin number with the port '
  }

};

const physical = Object.assign({}, virtual);
Object.assign(physical, physicalExtras);

// views only for virtual switches
virtual.views = { default: [],  fieldType: 'option-group',
    fieldProps: { label: 'Views', tip: 'Put this switch in checked views', type: 'toggle', options: [] }
  }

const view = {

  name: { default: '', unique: true,
    fieldProps: { label: 'view name', tip: 'enter unique view name' }
  }

};


module.exports = { physical, virtual, view };
