import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED*** getAllTokens ***REMOVED*** from '../controllers/manager.controllers.js';

const managerRouter = Router();

managerRouter.get('/alltokens', getAllTokens);

export default managerRouter;