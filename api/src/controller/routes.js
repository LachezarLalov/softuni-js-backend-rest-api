import { Router } from 'express';

import furnitureController from './furnitureController.js';

const routes = Router();

routes.use('/data/catalog', furnitureController);

export default routes;
