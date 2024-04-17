import ***REMOVED*** Router ***REMOVED*** from 'express';

import ***REMOVED***
***REMOVED******REMOVED***sendNotificationToTopic,
***REMOVED******REMOVED***getNotification
***REMOVED*** from '../controllers/notifications.controllers.js';
import ***REMOVED***
***REMOVED******REMOVED***isSuperUser
***REMOVED*** from '../middlewares/roleVerification.middleware.js';
const notificationRouter = Router();

notificationRouter.post('/', isSuperUser, sendNotificationToTopic);
notificationRouter.get('/', getNotification);

export default notificationRouter;
