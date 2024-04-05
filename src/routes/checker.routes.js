import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***checkToken,
***REMOVED******REMOVED***getCheckedTokens
***REMOVED*** from '../controllers/checker.controllers.js';
const checkerRouter = Router();

checkerRouter.patch('/checkToken', checkToken);
checkerRouter.get('/checkedTokens', getCheckedTokens);

export default checkerRouter;
