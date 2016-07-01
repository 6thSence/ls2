let helpers = require('../helpers.js');

Object.keys(helpers).forEach(helperName => {
  Handlebars.registerHelper(helperName, helpers[helperName]);
});

module.exports = class {
  compile(template, model) {
    let templateFn = Handlebars.compile(template);
    return templateFn(model);
  }
};
