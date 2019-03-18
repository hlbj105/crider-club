'use strict';

const Controller = require('egg').Controller;
const validator = require('validator');

class SignController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'this is login';
  }
  async signup() {
    const { ctx } = this;
    const name = validator.trim(ctx.request.body.name || '');
    const email = validator.trim(ctx.request.body.email || '');
    const pass = validator.trim(ctx.request.body.pass || '');
    const repass = validator.trim(ctx.request.body.repass || '');
    const code = validator.trim(ctx.request.body.code || '');

    let msg;
    // 验证信息的正确性
    if ([ name, pass, repass, email, code ].some(item => {
      return item === '';
    })) {
      msg = '信息不完整。';
    } else if (name.length < 5) {
      msg = '用户名至少需要5个字符。';
    } else if (!validator.isEmail(email)) {
      msg = '邮箱不合法。';
    } else if (pass !== repass) {
      msg = '两次密码输入不一致。';
    }
    if (msg) {
      ctx.status = 422;
      ctx.body = {
        msg, name, email
        };
      return;
    }
    ctx.body = '200'
  }
}

module.exports = SignController;
