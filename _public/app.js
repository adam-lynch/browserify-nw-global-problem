(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('../../../common/scripts/init')();



},{"../../../common/scripts/init":2}],2:[function(require,module,exports){
(function (global){
module.exports = (function(_this) {
  return function(opts) {
    var W;
    if (opts == null) {
      opts = {};
    }
    global.app = {};
    app.p = require('./p');
    W = require('./w');
    return new W();
  };
})(this);



}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./p":3,"./w":4}],3:[function(require,module,exports){
var P;

P = (function() {
  function P() {
    this.abc = 123;
  }

  return P;

})();

module.exports = new P();



},{}],4:[function(require,module,exports){
var W;

module.exports = W = (function() {
  function W() {
    alert(app.p.abc);
  }

  return W;

})();



},{}]},{},[1])