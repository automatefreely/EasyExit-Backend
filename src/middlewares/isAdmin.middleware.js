import ***REMOVED*** response_403, response_500 ***REMOVED*** from '../utils/responseCodes.js';
import userRole from '../utils/role.js';

async function isAdmin(req, res, next) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (req.user?.role == userRole.admin) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***next();
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** else ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_403(res, 'User not an admin');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while checking admin', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export default isAdmin;
