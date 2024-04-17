import ***REMOVED*** NotificationStatus ***REMOVED*** from '@prisma/client';
import ***REMOVED***
***REMOVED******REMOVED***response_200,
***REMOVED******REMOVED***response_400,
***REMOVED******REMOVED***response_500
***REMOVED*** from '../utils/responseCodes.js';
import prisma, ***REMOVED*** connDB ***REMOVED*** from '../config/db.config.js';

import sendNotification from '../utils/sendFirebaseNotification.js';
export const sendNotificationToTopic = async (req, res) => ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** title, description, topic ***REMOVED*** = req.body;
***REMOVED******REMOVED******REMOVED******REMOVED***if (!title || !description || !topic)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***response_400(res, 'Provide required parameter!');
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** email, organizationId ***REMOVED*** = req.user;
***REMOVED******REMOVED******REMOVED******REMOVED***console.log(req.user);

***REMOVED******REMOVED******REMOVED******REMOVED***const notification = await prisma.notifications.create(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***title,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***description,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***topic,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***sender: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***connect: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email: email
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***organization: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***connect: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***id: organizationId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);

***REMOVED******REMOVED******REMOVED******REMOVED***const actual_topic = `$***REMOVED***organizationId***REMOVED***-$***REMOVED***topic***REMOVED***`;
***REMOVED******REMOVED******REMOVED******REMOVED***sendNotification(***REMOVED*** title, description ***REMOVED***)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***.topic(actual_topic)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***.then((response) => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***prisma.notifications.update(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notificaitonId: notification.notificaitonId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notificationStatus: NotificationStatus.SUCCESS
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log('Successfully sent message:', response);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***response_200(res, 'Success', ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***response
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***.catch((error) => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***prisma.notifications.update(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notificaitonId: notification.notificaitonId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notificationStatus: NotificationStatus.FAILED
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***response_500(res, 'Failed!', ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***error
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log('Error sending message:', error);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED*** catch (err) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***response_500(res, 'error sending notification!', err);
***REMOVED******REMOVED******REMOVED***
***REMOVED***;

export const getNotification = async (req, res) => ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** topic ***REMOVED*** = req.body;
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** organizationId ***REMOVED*** = req.user;

***REMOVED******REMOVED******REMOVED******REMOVED***const notification = await prisma.notifications.findMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED*** topic, organizationId ***REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***orderBy: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***createdAt: 'desc'
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);

***REMOVED******REMOVED******REMOVED******REMOVED***response_200(res, 'Notifications received successfully', notification);
***REMOVED******REMOVED******REMOVED*** catch (err) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***response_500(res, 'error sending notification!', err);
***REMOVED******REMOVED******REMOVED***
***REMOVED***;
