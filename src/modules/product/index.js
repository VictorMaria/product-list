import express from 'express';
import * as productController from './productController';

const Router = express.Router();

Router.get(
    '/products',
    productController.fetchMany,
);

export default Router;
