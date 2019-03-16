module.exports = app => {
  const {router,controller} = app;
  const newsRouter = router.namespace('/admin');
  newsRouter.get('/',controller.admin.index);
  router.redirect('/news/list','/admin');
} 