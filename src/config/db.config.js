import ***REMOVED*** Prisma, PrismaClient ***REMOVED*** from '@prisma/client';
const prisma = new PrismaClient(***REMOVED***
***REMOVED******REMOVED***errorFormat: 'pretty',
***REMOVED***);
export default prisma;

export async function connDB() ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***await prisma.$connect();
***REMOVED******REMOVED******REMOVED******REMOVED***console.log(`🎉 Connected to Database`);
***REMOVED******REMOVED******REMOVED******REMOVED***prisma.$on('beforeExit', async () => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***await prisma.$disconnect();
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log(`🚪 Database connection closed`);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED*** catch (error) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***console.log(error);
***REMOVED******REMOVED******REMOVED***
***REMOVED***
