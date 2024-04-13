import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***adminRegister,
***REMOVED******REMOVED***login,
***REMOVED******REMOVED***peoplesRegister,
***REMOVED******REMOVED***supervisorRegister
***REMOVED*** from '../controllers/auth.controllers.js';
import upload from '../middlewares/multer.middleware.js';
import ***REMOVED*** middlewareEmailValidater ***REMOVED*** from '../validaters/email.validaters.js';

const authRouter = Router();

authRouter.post('/login', middlewareEmailValidater, login);
authRouter.post(
***REMOVED******REMOVED***'/register/admin',
***REMOVED******REMOVED***upload.fields([
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** name: 'organizationLogo', maxCount: 1 ***REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** name: 'profileImg', maxCount: 1 ***REMOVED***
***REMOVED******REMOVED***]),
***REMOVED******REMOVED***middlewareEmailValidater,
***REMOVED******REMOVED***adminRegister
);
authRouter.post(
***REMOVED******REMOVED***'/register/peoples',
***REMOVED******REMOVED***upload.single('profileImg'),
***REMOVED******REMOVED***middlewareEmailValidater,
***REMOVED******REMOVED***peoplesRegister
);
authRouter.post(
***REMOVED******REMOVED***'/register/supervisor',
***REMOVED******REMOVED***upload.single('profileImg'),
***REMOVED******REMOVED***middlewareEmailValidater,
***REMOVED******REMOVED***supervisorRegister
);

export default authRouter;
