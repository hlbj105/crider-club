const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    return user;
  }
  /**
 * 生成 Token
 * @param {Object} data
 */
  createToken(data) {
    return app.jwt.sign(data, app.config.jwt.secret, {
      expiresIn: "12h"
    });
  }

  /**
   * 验证token的合法性
   * @param {String} token
   */
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      app.jwt.verify(token, app.config.jwt.secret, function(err, decoded) {
        let result = {};
        if (err) {
          /*
            err = {
              name: 'TokenExpiredError',
              message: 'jwt expired',
              expiredAt: 1408621000
            }
          */
          result.verify = false;
          result.message = err.message;
        } else {
          result.verify = true;
          result.message = decoded;
        }
        resolve(result);
      });
    });
  }
}

module.exports = UserService;