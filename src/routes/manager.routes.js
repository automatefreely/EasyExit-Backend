import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***getAllTokens,
***REMOVED******REMOVED***getAcceptedToken,
***REMOVED******REMOVED***getRejectedToken,
***REMOVED******REMOVED***acceptToken,
***REMOVED******REMOVED***rejectToken
***REMOVED*** from '../controllers/manager.controllers.js';

const managerRouter = Router();

managerRouter.get('/alltokens', getAllTokens);
managerRouter.get('/tokens/accepted', getAcceptedToken);
managerRouter.get('/tokens/rejected', getRejectedToken);
managerRouter.post('/token/accept', acceptToken);
managerRouter.post('/token/reject', rejectToken);

export default managerRouter;
