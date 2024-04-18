import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***addSupervisor,
***REMOVED******REMOVED***getSupervisor
***REMOVED*** from '../controllers/admin.controllers.js';

const adminRouter = Router();

adminRouter.post('/supervisors', addSupervisor);
adminRouter.get('/supervisors', getSupervisor);

export default adminRouter;
