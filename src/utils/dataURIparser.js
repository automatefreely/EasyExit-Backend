import DataURIParser from 'datauri/parser';
export const getFileType = (file) => ***REMOVED***
***REMOVED******REMOVED***return***REMOVED***file.mimetype.split('/').pop();
***REMOVED***

export const getDataURI = async (file) => ***REMOVED***
***REMOVED******REMOVED***const parser = new DataURIParser();
***REMOVED******REMOVED***return parser.format(getFileType(file),file.buffer);
***REMOVED***