import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED*** addSupervisor ***REMOVED*** from '../controllers/admin.controllers.js';

const adminRouter = Router();

adminRouter.post('/add/supervisors', addSupervisor);

export default adminRouter;
