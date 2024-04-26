import ***REMOVED*** NotificationStatus ***REMOVED*** from '@prisma/client';
import ***REMOVED***
***REMOVED******REMOVED***response_200,
***REMOVED******REMOVED***response_400,
***REMOVED******REMOVED***response_500
***REMOVED*** from '../utils/responseCodes.js';
import prisma from '../config/db.config.js';

import sendNotification from '../utils/sendFirebaseNotification.js';
// import ***REMOVED*** TOPIC ***REMOVED*** from '../utils/role.js';
export const sendNotificationToTopic = async (req, res) => ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** title, description, topic ***REMOVED*** = req.body;
***REMOVED******REMOVED******REMOVED******REMOVED***// const enumTopic = TOPIC?.[topic];
***REMOVED******REMOVED******REMOVED******REMOVED***const enumTopic = topic;
***REMOVED******REMOVED******REMOVED******REMOVED***if (!title || !description || !topic) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Provide required parameter!');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** else if (!enumTopic) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***return response_400(res, 'Invalid topic!');
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** email, organizationId ***REMOVED*** = req.user;

***REMOVED******REMOVED******REMOVED******REMOVED***const notification = await prisma.notifications.create(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***title,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***description,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***topic: enumTopic,
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

***REMOVED******REMOVED******REMOVED******REMOVED***sendNotification(***REMOVED*** title, description ***REMOVED***)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***.topic(`$***REMOVED***organizationId***REMOVED***-$***REMOVED***topic***REMOVED***`)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***.then(async (response) => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***await prisma.notifications.update(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notificaitonId: notification.notificaitonId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notificationStatus: NotificationStatus.SUCCESS
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log('Successfully sent message:', response);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***.catch(async (error) => ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***await prisma.notifications.update(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notificaitonId: notification.notificaitonId
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***data: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notificationStatus: NotificationStatus.FAILED
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log('Error sending message:', error);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED******REMOVED***return response_200(res, 'Message initiated!');
***REMOVED******REMOVED******REMOVED*** catch (err) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'error sending notification!', err);
***REMOVED******REMOVED******REMOVED***
***REMOVED***;

export const getNotification = async (req, res) => ***REMOVED***
***REMOVED******REMOVED***try ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** topic ***REMOVED*** = req.body;
***REMOVED******REMOVED******REMOVED******REMOVED***const ***REMOVED*** organizationId, email ***REMOVED*** = req.user;

***REMOVED******REMOVED******REMOVED******REMOVED***const notification = await prisma.notifications.findMany(***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***// where: ***REMOVED*** topic, organizationId ***REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***where: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***AND: [
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** topic ***REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** organizationId ***REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***OR: [
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** senderEmail: email ***REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED*** notificationStatus: NotificationStatus.SUCCESS ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***]
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***]
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***orderBy: ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***createdAt: 'desc'
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***);

***REMOVED******REMOVED******REMOVED******REMOVED***return response_200(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***'Notifications received successfully',
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***notification
***REMOVED******REMOVED******REMOVED******REMOVED***);
***REMOVED******REMOVED******REMOVED*** catch (err) ***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***return response_500(res, 'error sending notification!', err);
***REMOVED******REMOVED******REMOVED***
***REMOVED***;
