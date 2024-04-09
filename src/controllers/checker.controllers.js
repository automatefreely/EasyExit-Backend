import ***REMOVED*** TokenStatus ***REMOVED*** from '@prisma/client';
import prisma from '../config/db.config.js';

import ***REMOVED***
***REMOVED******REMOVED***response_201,
***REMOVED******REMOVED***response_400,
***REMOVED******REMOVED***response_500,
***REMOVED******REMOVED***response_404
***REMOVED*** from '../utils/responseCodes.js';

export async function checkToken(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** email, organizationId ***REMOVED*** = req.user;
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** tokenId ***REMOVED*** = req.body;

***REMOVED******REMOVED******REMOVED******REMOVED***const currTime = new Date();
***REMOVED******REMOVED******REMOVED******REMOVED***const token = await prisma.token.findUnique(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: tokenId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);

***REMOVED******REMOVED******REMOVED******REMOVED***if (!token) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_404(res, 'Token not found');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token.status !== TokenStatus.ISSUED ||
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token.status !== TokenStatus.IN_USE
***REMOVED******REMOVED******REMOVED******REMOVED***) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Not a valid Token to use');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***

***REMOVED******REMOVED******REMOVED******REMOVED***if (!token.exitTime) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***if (token.startTime > currTime) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'not permitted to visit at this time');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***await prisma.token.update(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: tokenId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***exitTime: currTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: TokenStatus.IN_USE,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***checkedByUid: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***connnect: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: email
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_201(res, 'token verified successfully');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** else ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***await prisma.token.update(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: tokenId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***returnedTime: currTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status:
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token.endTime < currTime
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***? TokenStatus.LATE
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***: TokenStatus.EXPIRED
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_201(res, 'token verified successfully');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Server Error', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function getCheckedTokens(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** email, organizationId ***REMOVED*** = req.user;

***REMOVED******REMOVED******REMOVED******REMOVED***const tokens = await prisma.token.findMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***checkedByUid: email
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***reason: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***exitTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***returnedTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);

***REMOVED******REMOVED******REMOVED******REMOVED***return response_201(res, 'Tokens checked by you', tokens);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Server Error', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***
