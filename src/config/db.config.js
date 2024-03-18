import ***REMOVED*** PrismaClient ***REMOVED*** from '@prisma/client';
const prisma = new PrismaClient();
export default prisma;

export async function connDB() ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***await prisma.$connect();
***REMOVED******REMOVED******REMOVED******REMOVED***console.log(`Connected to Database`);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.log(error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***
