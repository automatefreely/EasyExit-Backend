import cloudinary from 'cloudinary';

cloudinary.v2.config(***REMOVED***
***REMOVED******REMOVED***cloud_name: process.env.CLOUD_NAME,
***REMOVED******REMOVED***api_key: process.env.CLOUD_API_KEY,
***REMOVED******REMOVED***api_secret: process.env.CLOUD_API_SECRET
***REMOVED***);

export default cloudinary;
