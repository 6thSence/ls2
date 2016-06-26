(function() {
  'use strict';

  if (!document.querySelector('.welcome')) {
    return;
  }

  var states = {
    SIGN_IN: 'sign-in',
    SIGN_UP: 'sign-up'
  };

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

  var rootEl = document.querySelector('.welcome');
  var titleEl = rootEl.querySelector('.welcome_title');
  var activeState = states.SIGN_IN;

  function changeState(newState) {
    forms[activeState].actionOut && forms[activeState].actionOut();
    forms[newState].actionIn && forms[newState].actionIn();

    forms[activeState].el.hidden = true;
    forms[newState].el.hidden = false;
    titleEl.textContent = forms[newState].title;

    activeState = newState;
  }

  rootEl.addEventListener('click', function(e) {
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
  });
})();
