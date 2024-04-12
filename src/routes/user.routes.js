import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED*** requestToken, getAcceptedOutpasses, getRejectedOutpasses ***REMOVED*** from '../controllers/user.controllers.js';

const userRouter = Router();

userRouter.post('/requestToken', requestToken);
userRouter.get('/approvedOutpass',getAcceptedOutpasses);
userRouter.get('/rejectedOutpass',getRejectedOutpasses);

export default userRouter;
