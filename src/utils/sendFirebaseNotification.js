import ***REMOVED*** getMessaging ***REMOVED*** from 'firebase-admin/messaging';
import ***REMOVED*** initializeApp, applicationDefault ***REMOVED*** from 'firebase-admin/app';
import dotenv from 'dotenv';
dotenv.config();

const app = initializeApp(***REMOVED***
***REMOVED******REMOVED***credential: applicationDefault(),
***REMOVED******REMOVED***projectId: 'easy-exit-sdf'
***REMOVED***);

const sendNotification = (data) => ***REMOVED***
***REMOVED******REMOVED***/**
***REMOVED******REMOVED*** * Usage:
***REMOVED******REMOVED*** * sendNotification(***REMOVED*** name: "swaroop dora" ***REMOVED***).topic("ann") -> promise;
***REMOVED******REMOVED*** * sendNotification(***REMOVED*** name: "swaroop dora" ***REMOVED***).token("ann") -> promise;
***REMOVED******REMOVED*** */
***REMOVED******REMOVED***const message = ***REMOVED*** data ***REMOVED***;

***REMOVED******REMOVED***const sendMessage = () => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return getMessaging().send(message);
***REMOVED******REMOVED******REMOVED***;

***REMOVED******REMOVED***const topic = (topic_name) => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***message.topic = topic_name;
***REMOVED******REMOVED******REMOVED******REMOVED***return sendMessage();
***REMOVED******REMOVED******REMOVED***;

***REMOVED******REMOVED***const token = (token_id) => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***message.token = token_id;
***REMOVED******REMOVED******REMOVED******REMOVED***return sendMessage();
***REMOVED******REMOVED******REMOVED***;

***REMOVED******REMOVED***return ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***topic,
***REMOVED******REMOVED******REMOVED******REMOVED***token
***REMOVED******REMOVED******REMOVED***;
***REMOVED***;

// const message = ***REMOVED***
//***REMOVED******REMOVED*** name: 'swaroop dora'
// ***REMOVED***;

// sendNotification(message)
//***REMOVED******REMOVED*** .topic('ann')
//***REMOVED******REMOVED*** .then((response) => ***REMOVED***
//***REMOVED******REMOVED******REMOVED******REMOVED*** console.log(response);
//***REMOVED******REMOVED*** ***REMOVED***);

export default sendNotification;
