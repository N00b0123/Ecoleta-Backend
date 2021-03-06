import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const itemsController = new ItemsController();
const pointsController = new PointsController();


routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.post('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;