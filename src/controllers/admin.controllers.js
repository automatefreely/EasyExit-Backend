import prisma from '../config/db.config.js';
import ***REMOVED***
***REMOVED******REMOVED***response_200,
***REMOVED******REMOVED***response_400,
***REMOVED******REMOVED***response_500
***REMOVED*** from '../utils/responseCodes.js';
import ***REMOVED*** emailValidater ***REMOVED*** from '../validaters/email.validaters.js';

export async function addSupervisor(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***let checkerEmails = req.body.checkerEmails; // receives a list of emails
***REMOVED******REMOVED******REMOVED******REMOVED***let managerEmails = req.body.managerEmails;
***REMOVED******REMOVED******REMOVED******REMOVED***const organizationId = req.user.organizationId;

***REMOVED******REMOVED******REMOVED******REMOVED***if (!organizationId)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Organization ID is required!');
***REMOVED******REMOVED******REMOVED******REMOVED***if (!checkerEmails && !managerEmails)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Checker or Manager emails are required!');
***REMOVED******REMOVED******REMOVED******REMOVED***if (!checkerEmails) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***checkerEmails = [];
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (!managerEmails) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***managerEmails = [];
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***

***REMOVED******REMOVED******REMOVED******REMOVED***const validCheckerEmails = checkerEmails.filter(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***(email) => typeof email === 'string' && emailValidater(email)
***REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***const validManagerEmails = managerEmails.filter(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***(email) => typeof email === 'string' && emailValidater(email)
***REMOVED******REMOVED******REMOVED******REMOVED***);

***REMOVED******REMOVED******REMOVED******REMOVED***if (validCheckerEmails.length === 0 && validManagerEmails.length === 0)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Invalid Checker or Manager emails!');

***REMOVED******REMOVED******REMOVED******REMOVED***// const validEmails = [...validCheckerEmails, ...validManagerEmails];
***REMOVED******REMOVED******REMOVED******REMOVED***await prisma.$transaction([
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***prisma.user.createMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: validEmails.map((email) => (***REMOVED*** email ***REMOVED***)),
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***skipDuplicates: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***),
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***prisma.checker.createMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: validCheckerEmails.map((email) => (***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: email,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***))
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***),
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***prisma.manager.createMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: validManagerEmails.map((email) => (***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: email,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***))
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***)
***REMOVED******REMOVED******REMOVED******REMOVED***]);

***REMOVED******REMOVED******REMOVED******REMOVED***response_200(res, 'supervisors added successfully');
***REMOVED******REMOVED******REMOVED*** catch (err) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***response_500(res, 'Error adding supervisor!', err);
***REMOVED******REMOVED******REMOVED***
***REMOVED***

export async function getSupervisor(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const organizationId = req.user.organizationId;
***REMOVED******REMOVED******REMOVED******REMOVED***if (!organizationId)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Organization ID is required!');

***REMOVED******REMOVED******REMOVED******REMOVED***const supervisors = await prisma.user.findMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organizationId: organizationId,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***OR: [
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***NOT: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***checker: null
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***NOT: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***manager: null
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***]
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***checker: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***manager: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);

***REMOVED******REMOVED******REMOVED******REMOVED***const formattedData = supervisors.reduce(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***(acc, supervisor) => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***acc[supervisor.manager !== null ? 'manager' : 'checker'].push(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***supervisor
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return acc;
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** manager: [], checker: [] ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***response_200(res, 'Supervisors fetched successfully', formattedData);
***REMOVED******REMOVED******REMOVED*** catch (err) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***response_500(res, 'Error fetching Supervisors!', err);
***REMOVED******REMOVED******REMOVED***
***REMOVED***
