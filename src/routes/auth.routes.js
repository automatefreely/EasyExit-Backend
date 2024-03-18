import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***adminRegister,
***REMOVED******REMOVED***login,
***REMOVED******REMOVED***peoplesRegister,
***REMOVED******REMOVED***supervisorRegister,
***REMOVED******REMOVED***validate
***REMOVED*** from '../controllers/auth.controllers.js';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register/admin', adminRegister);
authRouter.post('/register/peoples', peoplesRegister);
authRouter.post('/register/supervisor', supervisorRegister); //Manager and checker
authRouter.post('/validation', validate);

export default authRouter;
