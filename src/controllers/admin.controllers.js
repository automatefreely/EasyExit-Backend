import prisma from '../config/db.config.js';
import ***REMOVED***
***REMOVED******REMOVED***response_200,
***REMOVED******REMOVED***response_404,
***REMOVED******REMOVED***response_500
***REMOVED*** from '../utils/responseCodes.js';
import ***REMOVED*** emailValidater ***REMOVED*** from '../validaters/email.validaters.js';

export async function addSupervisor(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***let checkerEmails = req.body.checkerEmails; // receives a list of emails
***REMOVED******REMOVED******REMOVED******REMOVED***let managerEmails = req.body.managerEmails;
***REMOVED******REMOVED******REMOVED******REMOVED***const organizationId = req.user.organizationId;

***REMOVED******REMOVED******REMOVED******REMOVED***if (!organizationId)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_404(res, 'Organization ID is required!');
***REMOVED******REMOVED******REMOVED******REMOVED***if (!checkerEmails && !managerEmails)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_404(res, 'Checker or Manager emails are required!');
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
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_404(res, 'Invalid Checker or Manager emails!');

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
