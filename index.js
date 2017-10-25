module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;

  return content.indexOf('module.exports =') >=0 ? content : 'module.exports =' + JSON.stringify(content);
}
