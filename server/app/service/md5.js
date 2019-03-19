const utility = require('utility');

export default md5 = function(pass) {
  return utility.md5(pass + '加密' + utility.md5(pass))
}