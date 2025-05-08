import express from 'express';
import { listActivities, createActivity } from '../controllers/activity.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { activityArraySchema } from '../validators/activity.validator.js';
import { validateJoi } from '../middlewares/validate.middleware.js';

const router = express.Router();
router.get('/allActivities', listActivities);

// Create Activity - Authorized Users Only
router.post('/addActivities', authMiddleware, validateJoi(activityArraySchema), createActivity);

export default router;