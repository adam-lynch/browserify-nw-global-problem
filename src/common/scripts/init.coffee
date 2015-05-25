module.exports = (opts = {}) =>
    #global.app = {} # Must uncomment this when `insertGlobalVars` is not used
    app.p = require './p'
    W = require './w'
    new W()