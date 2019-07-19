const sails = require('sails');

before(done => {
  sails.lift({}, err => {
    if (err) { return done(err); }
    return done();
  });
});

after(done => {
  sails.lower(done);
});
