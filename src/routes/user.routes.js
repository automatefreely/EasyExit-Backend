import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED*** requestToken ***REMOVED*** from '../controllers/user.controllers.js';

const userRouter = Router();

userRouter.post('/requestToken', requestToken);

export default userRouter;
