import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED*** checkToken ***REMOVED*** from '../controllers/checker.controllers.js';
const checkerRouter = Router();

checkerRouter.post('/checkToken', checkToken);

export default checkerRouter;
