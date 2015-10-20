/* بسم الله الرحمن الرحيم */

module.exports = (function () {
  var defer = require('./lib/defer');
  
  function Fruit (adapter) {
    
    var _adapter = adapter;
    
    function getCallBack (deferred) {
      return function (err, result) {
        if(err) deferred.reject(err);
        else deferred.resolve(result);
      }
    }
    
    this.insert = function (tocName, data) {
      var deferred = defer();
      _adapter.insert(tocName, data, getCallBack(deferred))
      return deferred.getPromise();
    }
    
    this.find = function (tocName, condition) {
      var deferred = defer();
      _adapter.find(tocName, condition, getCallBack(deferred));
      return deferred.getPromise();
    }
    
    this.findAll = function (tocName) {
      var deferred = defer();
      _adapter.findAll(tocName, getCallBack(deferred));
      return deferred.getPromise();
    }
    
    this.update   = adapter.update
    
    this.remove   = adapter.remove
    
  }
  
  return Fruit;
  
}());