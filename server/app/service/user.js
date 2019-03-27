const Service = require('egg').Service;
const utils = require('utility');

class UserService extends Service {
 
  
  /*
   * 根据关键字，获取一组用户
   * Callback:
   * - err, 数据库异常
   * - users, 用户列表
   * @param {String} query 关键字
   * @param {Object} opt 选项
   * @return {Promise[users]} 承载用户列表的 Promise 对象
   */
  getUsersByQuery(query, opt) {
    return this.ctx.model.User.find(query, '', opt).exec();
  }

  // 获取gravatar头像
  makeGravatar(email) {
    return (
      'https://cn.gravatar.com/avatar/' +
      utils.md5(email.toLowerCase()) +
      '?size=48'
    );
  }

  getGravatar(user) {
    return user.avatar || this.makeGravatar(user.email);
  }
 
}

module.exports = UserService;