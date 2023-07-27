const shopkeeperRoutes = require('./shopkeeperRoutes');
const studentRoutes = require('./studentRoutes');
const menuRoutes = require('./menuRoutes');

module.exports = function(app){
    shopkeeperRoutes(app);
    studentRoutes(app);
    menuRoutes(app)
}