(function() {
  'use strict';
  
  var states = {
    SIGN_IN: 'sign-in',
    SIGN_UP: 'sign-up'
  };

  var rootEl = document.querySelector('.welcome');
  var titleEl = rootEl.querySelector('.welcome_title');
  var activeState = states.SIGN_IN;

  var forms = {
    [states.SIGN_IN]: {
      title: 'Добро пожаловать',
      el: document.forms['sign-in'],
      actionIn: function() {
        rootEl.querySelector('.welcome_description').hidden = false;
      },
      actionOut: function() {
        rootEl.querySelector('.welcome_description').hidden = true;
      }
    },
    [states.SIGN_UP]: {
      title: 'Регистрация',
      el: document.forms['sign-up']
    }
  };

  rootEl.addEventListener('click', onChangeState);

  focus(searchFirstInput(forms[activeState].el));

  function changeState(newState) {
    forms[activeState].actionOut && forms[activeState].actionOut();
    forms[newState].actionIn && forms[newState].actionIn();

    forms[newState].el.hidden = false;
    forms[activeState].el.hidden = true;
    titleEl.textContent = forms[newState].title;

    focus(searchFirstInput(forms[newState].el));

    activeState = newState;
  }

  function searchFirstInput(form) {
    var elements = form && form.elements || [];
    var allowedTypes = ['text', 'email', 'password'];
    var i, l;

    for (i = 0, l = elements.length; i < l; i++) {
      if (elements[i].tagName === 'INPUT' && allowedTypes.indexOf(elements[i].type) !== -1 && !elements[i].value.trim()) {
        return elements[i];
      }
    }
  }

  function focus(element) {
    element && element.focus && element.focus();
  }

  function onChangeState(e) {
    var target = e.target;
    var behavior = target.dataset.behavior;

    if (!behavior) {
      return;
    }

    e.preventDefault();

    switch (behavior) {
      case 'view-sign-in': changeState(states.SIGN_IN); break;
      case 'view-sign-up': changeState(states.SIGN_UP); break;
    }
  }
})();
