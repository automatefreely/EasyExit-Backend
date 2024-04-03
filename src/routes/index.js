import ***REMOVED*** Router ***REMOVED*** from 'express';
import authRouter from './auth.routes.js';
import managerRoutes from './manager.routes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/manager', managerRoutes);

export default router;
