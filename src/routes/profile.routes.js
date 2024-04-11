import ***REMOVED*** Router ***REMOVED*** from 'express';

import ***REMOVED***
***REMOVED******REMOVED***getProfile,
***REMOVED******REMOVED***updateProfile,
***REMOVED******REMOVED***deleteProfile
***REMOVED*** from '../controllers/profile.controllers.js';
import upload from '../middlewares/multer.middleware.js';

const profileRouter = Router();

profileRouter.get('/', getProfile);
profileRouter.put('/', upload.single('profileImg'), updateProfile);
profileRouter.delete('/', deleteProfile);

export default profileRouter;
