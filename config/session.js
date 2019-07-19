if(process.env.IN_MEMORY_SESSIONS) {
  module.exports.session = {
    secret: '0bffaf2c11b89f60434efa46650c2c31',
  };
} else {
  module.exports.session = {
    adapter: 'connect-pg-simple',
    conString: process.env.DATABASE_URL,
    secret: '0bffaf2c11b89f60434efa46650c2c31',
  };
}
