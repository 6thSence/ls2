module.exports = class {

  constructor (engine) {
    if (!engine) {
     throw new Error('No engine');
    }

    this._engine = engine;
  }

  render(templateName, model) {
    if (typeof templateName !== 'string') {
      throw new Error('templateName must be a string');
    }

    return new Promise((resolve, reject) => {
      // TODO: async search of template
      let template = document.querySelector(`#${templateName}`);
      let HTMLString = template.innerHTML;

      resolve(HTMLString);
    }).then(template => {
      return this._engine.compile(template, model);
    });
  }

  renderTo(element, templateName, model) {
    return this.render(templateName, model)
      .then(template => {
        element.innerHTML = template;
      });
  }
};
