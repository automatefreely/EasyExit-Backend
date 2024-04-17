import ***REMOVED*** response_403, response_500 ***REMOVED*** from '../utils/responseCodes.js';
import ***REMOVED*** ROLE ***REMOVED*** from '../utils/role.js';

export async function isAdmin(req, res, next) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (req.user?.role == ROLE.admin) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***next();
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** else ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_403(res, 'Admin access required');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while checking admin', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function isManager(req, res, next) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (req.user?.role == ROLE.manager) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***next();
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** else ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_403(res, 'Manager access required');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while checking manager', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function isSuperUser(req, res, next) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (req.user?.role == ROLE.manager || req.user?.role == ROLE.admin) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***next();
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** else ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_403(res, 'Manager access required');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while checking manager', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function isChecker(req, res, next) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (req.user?.role == ROLE.checker) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***next();
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** else ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_403(res, 'Checker access required');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while checking checker', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function isPeoples(req, res, next) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (req.user?.role == ROLE.peoples) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***next();
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** else ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_403(res, 'User access required');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while checking user', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***
