const virtual = {

  name: { default: '', unique: true, 
    fieldProps: { label: 'Name', tip: 'enter unique circuit name' } 
  },
  desc: { default: '',
    fieldProps: { label: 'Description', tip: 'Describe Services' }
  },
  circuits: { default: [], fieldType: 'option-group',
    fieldProps: { label: 'Circuits', tip: 'Select circuits associated with this switch', inline: true, type: 'toggle', options: [] }
  },
  views: { default: [], 
    fieldProps: { label: 'Views', tip: 'Choose viewables categories for this switch' }
  }
};



const physicalExtras = {

  location: { default: '1' , fieldType: 'select',
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

const physical = Object.assign({}, virtual)
Object.assign(physical, physicalExtras)


module.exports = { physical, virtual };


