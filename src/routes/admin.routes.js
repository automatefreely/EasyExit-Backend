import ***REMOVED*** Router ***REMOVED*** from 'express';
import ***REMOVED***
***REMOVED******REMOVED***addSupervisor,
***REMOVED******REMOVED***getSupervisor,
***REMOVED******REMOVED***getCheckInOutpasses,
***REMOVED******REMOVED***getCheckoutOutpass
***REMOVED*** from '../controllers/admin.controllers.js';

const adminRouter = Router();

adminRouter.post('/supervisors', addSupervisor);
adminRouter.get('/supervisors', getSupervisor);
adminRouter.get('/checkIn',getCheckInOutpasses);
adminRouter.get('/checkOut',getCheckoutOutpass);

export default adminRouter;
