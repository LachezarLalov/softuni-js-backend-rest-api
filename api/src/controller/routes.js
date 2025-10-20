import { Router } from 'express';

import furnitureController from './furnitureController.js';
import userController from './userController.js';

const routes = Router();

routes.use('/users', userController);
routes.use('/data/catalog', furnitureController);

export default routes;
