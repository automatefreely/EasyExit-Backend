import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***adminRegister,
***REMOVED******REMOVED***login,
***REMOVED******REMOVED***peoplesRegister,
***REMOVED******REMOVED***supervisorRegister
***REMOVED*** from '../controllers/auth.controllers.js';
import upload from '../middlewares/multer.middleware.js';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post(
***REMOVED******REMOVED***'/register/admin',
***REMOVED******REMOVED***upload.fields([
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** name: 'organizationLogo', maxCount: 1 ***REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** name: 'profileImg', maxCount: 1 ***REMOVED***
***REMOVED******REMOVED***]),
***REMOVED******REMOVED***adminRegister
);
authRouter.post(
***REMOVED******REMOVED***'/register/peoples',
***REMOVED******REMOVED***upload.single('profileImg'),
***REMOVED******REMOVED***peoplesRegister
);
authRouter.post(
***REMOVED******REMOVED***'/register/supervisor',
***REMOVED******REMOVED***upload.single('profileImg'),
***REMOVED******REMOVED***supervisorRegister
);

export default authRouter;
