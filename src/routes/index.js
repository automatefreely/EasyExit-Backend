import ***REMOVED*** Router ***REMOVED*** from 'express';
import authRouter from './auth.routes.js';
import adminRouter from './admin.routes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/admin', adminRouter);

export default router;
