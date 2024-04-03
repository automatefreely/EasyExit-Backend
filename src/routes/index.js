import ***REMOVED*** Router ***REMOVED*** from 'express';
import authRouter from './auth.routes.js';
import managerRoutes from './manager.routes.js';
import checkerRouter from './checker.routes.js';
import adminRouter from './admin.routes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/manager', managerRoutes);
router.use('/checker', checkerRouter);

export default router;
