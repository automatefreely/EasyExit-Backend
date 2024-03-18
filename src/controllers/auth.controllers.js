import prisma from '../config/db.config';
import ***REMOVED*** sign ***REMOVED*** from 'jsonwebtoken';
import ***REMOVED*** compare ***REMOVED*** from 'bcrypt';
import ***REMOVED***
***REMOVED******REMOVED***response_200,
***REMOVED******REMOVED***response_400,
***REMOVED******REMOVED***response_401,
***REMOVED******REMOVED***response_404,
***REMOVED******REMOVED***response_500
***REMOVED*** from '../utils/responseCodes';

export async function login(req, res) ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***if (
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***!['peoples', 'admin', 'checker', 'manager'].includes(req.body.role)
***REMOVED******REMOVED******REMOVED******REMOVED***) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***response_400(res, 'Unavailable Role');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const existingUser = await prisma[req.body.role].findUnique(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***user: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: req.body.email
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***user: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***select: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: true,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***password: true
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***if (!existingUser) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***response_404(res, 'User not found');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const matchPassword = await compare(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***req.body.password,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***existingUser.password
***REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***if (!matchPassword) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***response_401(res, 'Invalid email or password');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const payLoad = ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: existingUser.email,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***role: req.body.role
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***;
***REMOVED******REMOVED******REMOVED******REMOVED***const token = sign(payLoad, process.env.JWT_SECRET);
***REMOVED******REMOVED******REMOVED******REMOVED***response_200(res, 'User has been logged In', ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***token,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***name: existingUser.name
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.error(error);
***REMOVED******REMOVED******REMOVED******REMOVED***response_500(res, 'Server Error', error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***
