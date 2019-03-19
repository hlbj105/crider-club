'use strict';

const Controller = require('egg').Controller;
const validator = require('validator');

class SignController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'this is login';
  }
  async signup() {
    const { ctx, service } = this;
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
    } else if (pass.length < 6) {
      msg = '密码不少于6个字符';
    }
    if (msg) {
      ctx.status = 422;
      ctx.body = {
            code: 0,
            msg,
            data:{
                name, email
            }
        };
      return;
    }

    // 查询是否有相同用户名或者邮箱
    const users = await service.user.getUsersByQuery({ $or: [
      { name },
      { email },
    ] }, {});

    if (users.length > 0) {
      ctx.status = 422;
      ctx.body = {
          code: 0,
          msg: '用户名或邮箱已被使用',
          data: {
            name, email
          }
      }
      return;
    }

    const passMd5 = ctx.helper.md5(pass);


    ctx.body = passMd5
  }
}

module.exports = SignController;
