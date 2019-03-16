'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'this is admin';
  }
}

module.exports = AdminController;
