import ***REMOVED*** Router ***REMOVED*** from "express";
import ***REMOVED*** adminRegister, login ***REMOVED*** from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post('/login',login);
authRouter.post('/register/admin',adminRegister);
// authRouter.post('/register/user');
// authRouter.post('/register/manager');

export default authRouter;