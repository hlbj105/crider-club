'use strict';
const Service = require('egg').Service;
const utils = require('utility');
const uuid = require('uuid');

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

  /**
   * 注册用户
   * @param {用户名} name 用户名
   * @param {密码} pass 密码
   * @param {邮箱} email 邮箱
   * @param {头像} avatar_url 头像
   * @param {激活状态} active 状态
   */
  newAndSavenewAndSave(name, pass, email, avatar_url, active) {
    const user = new this.ctx.model.User();
    user.name = name;
    user.pass = pass;
    user.email = email;
    user.avatar = avatar_url;
    user.active = active || false;
    user.accessToken = uuid.v4();

    return user.save();
  }

}

module.exports = UserService;
