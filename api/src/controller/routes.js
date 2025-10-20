import { Router } from 'express';

import furnitureController from './furnitureController.js';
import userController from './userController.js';

const routes = Router();

routes.use('/user', userController);
routes.use('/data/catalog', furnitureController);

export default route·o;
