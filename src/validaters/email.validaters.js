import ***REMOVED*** response_400 ***REMOVED*** from '../utils/responseCodes.js';
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]***REMOVED***2,4***REMOVED***$/;

export const middlewareEmailValidater = (req, res, next) => ***REMOVED***
***REMOVED******REMOVED***const email = req.body.email;
***REMOVED******REMOVED***if (!email) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Email is required');
***REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED***if (!emailRegex.test(email)) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Invalid Email');
***REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED***next();
***REMOVED***;

export const emailValidater = (email) => ***REMOVED***
***REMOVED******REMOVED***if (!email || !emailRegex.test(email)) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return false;
***REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED***return true;
***REMOVED***;
