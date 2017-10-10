//const users = require('./users/users.service.js')
const switches = require('./switches/switches.service.js')
const hardware = require('./hardware/hardware.service.js')
const circuits = require('./circuits/circuits.service.js')
module.exports = function () {
  const app = this // eslint-disable-line no-unused-vars
  // app.configure(users)
  app.configure(switches)
  app.configure(hardware)
  app.configure(circuits)
}
