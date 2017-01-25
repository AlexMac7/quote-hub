'use strict';

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    hook.data = Object.assign({}, hook.data, {
      createdAt: new Date().getTime(),
    });
  };
};
