import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***adminRegister,
***REMOVED******REMOVED***login,
***REMOVED******REMOVED***peoplesRegister
***REMOVED*** from '../controllers/auth.controllers.js';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register/admin', adminRegister);
authRouter.post('/register/peoples', peoplesRegister);
// authRouter.post('/register/manager');

export default authRouter;
