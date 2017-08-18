function loadDatabases(app) {
  const switches = app.service('/switches');
  const users = app.service('/users');
  
  console.log('\nClear databases.');
  Promise.all([
    switches.remove(null),
    users.remove(null)
  ])
    .then (() => {
      console.log('\n create db entries');
      return  Promise.all([
        //console.log('users and devices'),
        users.create({ device: 'pantry', role: 'admin', pin: '1234' }),
        users.create({ device: 'richard phone'}),
        //users.create({ device: 'laurel phone'}),
        //users.create({ device: 'david phone'}),
        //users.create({ name: 'admin', password: '1234' }),
        //console.log('switches'),
        switches.create({ name: 'Living Room', doctype: 'switch', type: 'virtual', categories: ['favorites'] }),
        switches.create({ name: 'Dining Room', doctype: 'switch', type: 'physical', categories: ['favorites'] })
        ])
    })

    .then(() => {
      console.log('\nDatabases loaded.');
    })
}


module.exports = loadDatabases
