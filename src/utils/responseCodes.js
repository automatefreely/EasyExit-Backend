export function response_200(res, message, data, actions) ***REMOVED***
***REMOVED******REMOVED***return res.status(200).json(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***status: 'OK',
***REMOVED******REMOVED******REMOVED******REMOVED***message,
***REMOVED******REMOVED******REMOVED******REMOVED***data,
***REMOVED******REMOVED******REMOVED******REMOVED***actions
***REMOVED******REMOVED******REMOVED***);
***REMOVED***

export function response_201(res, message, data) ***REMOVED***
***REMOVED******REMOVED***return res.status(201).json(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***status: 'Inserted',
***REMOVED******REMOVED******REMOVED******REMOVED***message,
***REMOVED******REMOVED******REMOVED******REMOVED***data
***REMOVED******REMOVED******REMOVED***);
***REMOVED***

export function response_204(res, message) ***REMOVED***
***REMOVED******REMOVED***return res.status(204).json(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***status: 'No content',
***REMOVED******REMOVED******REMOVED******REMOVED***message
***REMOVED******REMOVED******REMOVED***);
***REMOVED***

export function response_400(res, message) ***REMOVED***
***REMOVED******REMOVED***return res.status(400).json(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***status: 'error',
***REMOVED******REMOVED******REMOVED******REMOVED***error: message,
***REMOVED******REMOVED******REMOVED******REMOVED***message: 'Bad request'
***REMOVED******REMOVED******REMOVED***);
***REMOVED***

export function response_401(res, message) ***REMOVED***
***REMOVED******REMOVED***return res.status(401).json(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***status: 'error',
***REMOVED******REMOVED******REMOVED******REMOVED***error: message,
***REMOVED******REMOVED******REMOVED******REMOVED***message: 'Unauthorized'
***REMOVED******REMOVED******REMOVED***);
***REMOVED***

export function response_403(res, message) ***REMOVED***
***REMOVED******REMOVED***return res.status(403).json(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***status: 'error',
***REMOVED******REMOVED******REMOVED******REMOVED***error: message,
***REMOVED******REMOVED******REMOVED******REMOVED***message: 'Forbidden'
***REMOVED******REMOVED******REMOVED***);
***REMOVED***

export function response_404(res, message) ***REMOVED***
***REMOVED******REMOVED***return res.status(404).json(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***status: 'error',
***REMOVED******REMOVED******REMOVED******REMOVED***error: message,
***REMOVED******REMOVED******REMOVED******REMOVED***message: 'Not found'
***REMOVED******REMOVED******REMOVED***);
***REMOVED***

export function response_500(res, log_message, err) ***REMOVED***
***REMOVED******REMOVED***var message = err != null ? `$***REMOVED***log_message***REMOVED***: $***REMOVED***err***REMOVED***` : log_message;

***REMOVED******REMOVED***console.debug(message);

***REMOVED******REMOVED***return res.status(500).json(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***status: 'error',
***REMOVED******REMOVED******REMOVED******REMOVED***error: `$***REMOVED***message***REMOVED***`,
***REMOVED******REMOVED******REMOVED******REMOVED***message: 'Internal server error'
***REMOVED******REMOVED******REMOVED***);
***REMOVED***
