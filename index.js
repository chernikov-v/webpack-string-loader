module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;

  return content.indexOf('module.exports =') >=0 ? content : 'module.exports =' + JSON.stringify(content);
}
/*
module.exports.pitch =  function(remainingRequest, precedingRequest, data) {
      var ss = require(remainingRequest);

      var d = "module.exports = JSON.stringify(require(" + JSON.stringify("-!" + remainingRequest) + "));";
      debugger;
      return d
};
*/
