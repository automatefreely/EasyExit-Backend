import ***REMOVED*** Router ***REMOVED*** from "express";
import ***REMOVED*** login ***REMOVED*** from "../controllers/auth.controllers";

const authRouter = Router();

authRouter.post('/login',login);

export default authRouter;