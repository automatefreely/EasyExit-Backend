import multer, ***REMOVED*** memoryStorage ***REMOVED*** from 'multer';
const upload = multer(***REMOVED***
***REMOVED******REMOVED***storage: memoryStorage(),
***REMOVED******REMOVED***limits: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***fileSize: 5 * 1024 * 1024 // no larger than 5mb
***REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED***fileFilter: (req, file, cb) => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
***REMOVED******REMOVED******REMOVED******REMOVED***if (!allowedTypes.includes(file.mimetype)) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***const error = new Error('Incorrect file');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***error.code = 'INCORRECT_FILETYPE';
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return cb(error, false);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***cb(null, true);
***REMOVED******REMOVED******REMOVED***
***REMOVED***);

export default upload;
