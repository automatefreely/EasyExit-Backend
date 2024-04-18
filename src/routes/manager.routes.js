import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***getAllTokens,
***REMOVED******REMOVED***getAcceptedToken,
***REMOVED******REMOVED***getRejectedToken,
***REMOVED******REMOVED***acceptToken,
***REMOVED******REMOVED***rejectToken,
***REMOVED******REMOVED***tokenStats,
***REMOVED******REMOVED***getPendingToken
***REMOVED*** from '../controllers/manager.controllers.js';

const managerRouter = Router();

managerRouter.get('/alltokens', getAllTokens);
managerRouter.get('/tokens/pending', getPendingToken);
managerRouter.get('/tokens/accepted', getAcceptedToken);
managerRouter.get('/tokens/rejected', getRejectedToken);
managerRouter.patch('/token/accept', acceptToken);
managerRouter.patch('/token/reject', rejectToken);
managerRouter.get('/tokens/stats', tokenStats);

export default managerRouter;
