import ***REMOVED*** TokenStatus ***REMOVED*** from '@prisma/client';
import prisma from '../config/db.config.js';
import ***REMOVED***
***REMOVED******REMOVED***response_200,
***REMOVED******REMOVED***response_304,
***REMOVED******REMOVED***response_400,
***REMOVED******REMOVED***response_404,
***REMOVED******REMOVED***response_500
***REMOVED*** from '../utils/responseCodes.js';

export async function acceptToken(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** organizationId ***REMOVED*** = req.user;
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** token ***REMOVED*** = req.body;
***REMOVED******REMOVED******REMOVED******REMOVED***if (!token) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Token is required');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const tokenData = await prisma.token.findUnique(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: token
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***if (!tokenData) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_404(res, 'Token not found');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (tokenData.status === TokenStatus.ISSUED) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_304(res, 'Token already accepted');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const updatedToken = await prisma.token.update(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***id: token,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: TokenStatus.REQUESTED,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: TokenStatus.ISSUED
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_200(res, 'Token accepted successfully', updatedToken);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while accepting token', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function rejectToken(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** organizationId ***REMOVED*** = req.user;
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** token ***REMOVED*** = req.body;
***REMOVED******REMOVED******REMOVED******REMOVED***if (!token) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Token is required');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const tokenData = await prisma.token.findUnique(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: token
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***if (!tokenData) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_404(res, 'Token not found');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const updatedToken = await prisma.token.update(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: token,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: TokenStatus.REQUESTED
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: TokenStatus.REJECTED
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_200(res, 'Token rejected successfully', updatedToken);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while rejecting token', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function getAllTokens(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** organizationId ***REMOVED*** = req.user;
***REMOVED******REMOVED******REMOVED******REMOVED***const tokens = await prisma.token.findMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***reason: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***issuedBy: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***user: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***createdAt: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***updatedAt: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***const formattedData = tokens.map((token) => (***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: token.token,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***reason: token.reason,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: token.status,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***createdAt: token.createdAt,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***updatedAt: token.updatedAt,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: token.startTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: token.endTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: token.issuedBy.user.name,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: token.issuedBy.user.email
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***));
***REMOVED******REMOVED******REMOVED******REMOVED***return response_200(res, 'Tokens fetched successfully', formattedData);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while fetching tokens', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function getAcceptedToken(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** organizationId ***REMOVED*** = req.user;
***REMOVED******REMOVED******REMOVED******REMOVED***const tokens = await prisma.token.findMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: TokenStatus.ISSUED
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***reason: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***issuedBy: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***user: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***createdAt: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***updatedAt: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***const formattedData = tokens.map((token) => (***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: token.token,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***reason: token.reason,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: token.status,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***createdAt: token.createdAt,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***updatedAt: token.updatedAt,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: token.startTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: token.endTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: token.issuedBy.user.name,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: token.issuedBy.user.email
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***));
***REMOVED******REMOVED******REMOVED******REMOVED***return response_200(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***'Accepted tokens fetched successfully',
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***formattedData
***REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while fetching accepted tokens', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function getRejectedToken(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** organizationId ***REMOVED*** = req.user;
***REMOVED******REMOVED******REMOVED******REMOVED***const tokens = await prisma.token.findMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: TokenStatus.REJECTED
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***reason: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***issuedBy: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***user: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***createdAt: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***updatedAt: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***const formattedData = tokens.map((token) => (***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token: token.token,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***reason: token.reason,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***status: token.status,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***createdAt: token.createdAt,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***updatedAt: token.updatedAt,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***startTime: token.startTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***endTime: token.endTime,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: token.issuedBy.user.name,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: token.issuedBy.user.email
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***));
***REMOVED******REMOVED******REMOVED******REMOVED***return response_200(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***'Rejected tokens fetched successfully',
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***formattedData
***REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'Error while fetching rejected tokens', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***
