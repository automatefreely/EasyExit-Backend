import ***REMOVED*** Router***REMOVED*** from "express";

import ***REMOVED*** getProfile, updateProfile, deleteProfile ***REMOVED*** from "../controllers/profile.controllers.js";

const profileRouter = Router();

profileRouter.get('/', getProfile);
profileRouter.put('/', updateProfile);
profileRouter.delete('/', deleteProfile);

export default profileRouter;