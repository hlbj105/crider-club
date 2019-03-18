module.exports = app => {
  const {router,controller} = app;
  const apiV1Router = router.namespace('/api/v1');

  // 登录
  // apiV1Router.get('/login',controller.login.index);
  // 注册
  apiV1Router.post('/signup',controller.sign.signup);
} 