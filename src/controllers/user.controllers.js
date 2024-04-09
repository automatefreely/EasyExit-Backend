import prisma from '../config/db.config.js';
import ***REMOVED***
***REMOVED******REMOVED***response_401,
***REMOVED******REMOVED***response_200,
***REMOVED******REMOVED***response_500,
***REMOVED******REMOVED***response_201
***REMOVED*** from '../utils/responseCodes.js';

export async function requestToken(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** email, organizationId ***REMOVED*** = req.user;
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** reason, startTime, endTime ***REMOVED*** = req.body;

***REMOVED******REMOVED******REMOVED******REMOVED***if (!reason || !startTime || !endTime) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_401(res, 'Please provide all the fields');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***

***REMOVED******REMOVED******REMOVED******REMOVED***const token = await prisma.token.create(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***reason: reason,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: startTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: endTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***issuedBy: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***connect: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: email
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***response_201(res, 'Token has been requested', token);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Server Error', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***
