let Designer = require('./designer');
let Engine = require('./engine/handlebars');

module.exports = new Designer(new Engine());
