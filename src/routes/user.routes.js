import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***requestToken,
***REMOVED******REMOVED***getAcceptedOutpasses,
***REMOVED******REMOVED***getRejectedOutpasses,
***REMOVED******REMOVED***getToken,
***REMOVED******REMOVED***getPendingOutpasses
***REMOVED*** from '../controllers/user.controllers.js';

const userRouter = Router();

userRouter.post('/requestToken', requestToken);
userRouter.get('/approvedOutpass', getAcceptedOutpasses);
userRouter.get('/rejectedOutpass', getRejectedOutpasses);
userRouter.get('/pendingOutpass', getPendingOutpasses);
userRouter.get('/getToken', getToken);

export default userRouter;
