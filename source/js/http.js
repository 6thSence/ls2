var http = (function() {

  function request(method, url) {
    var xhr;
    var deferred = {
      promise: null,
      resolve: null,
      reject: null
    };

    deferred.promise = new Promise(function(resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });

    method = method.toLowerCase();

    if (typeof method !== 'string' || ['get', 'post'].indexOf(method) === -1) {
      throw new Error('Wrong param');
    }

    if (typeof url !== 'string') {
      throw new Error('Wrong param');
    }

    xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'document';

    xhr.onload = function() {
      deferred.resolve(xhr);
    };

    xhr.onerorr = function() {
      deferred.reject(xhr);
    };

    xhr.send();

    return deferred.promise;
  }

  return {
    get: function(url) {
      return request('get', url);
    },
    post: function (url) {
      return request('post', url);
    }
  };
})();


http.get('templates.html').then(function(xhr) {
  console.log(xhr.response.querySelector('#t1').content);
});