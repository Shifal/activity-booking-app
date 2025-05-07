import express from 'express';
import { register, login, getAllUsers  } from '../controllers/auth.controller.js';
import { registerSchema, loginSchema } from '../validators/auth.validator.js';
import validate from '../middlewares/joi.middleware.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/allUsers', getAllUsers);

export default router;
