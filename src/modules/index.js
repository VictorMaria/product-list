import productRouter from './product';

const apiPrefix = '/api/v1';

const routes = [ productRouter ];

export default (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  return app;
};
