import express from 'express';
import { bookActivity, getMyBookings } from '../controllers/booking.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/bookActivities', authMiddleware, bookActivity);
router.get('/myBookings', authMiddleware, getMyBookings);

export default router;