
module.exports = function(app) {
    var campaigns = require('./campaigns');

    app.use('/campaigns', campaigns);
};
