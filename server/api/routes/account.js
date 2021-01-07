import express from 'express';
import { authenticateToken } from './../middleware/authToken.js';
import { registerValidations, loginValidations } from './../middleware/validateUser.js';
import {
  registerController,
  loginController,
  getUserData,
  updateProfile,
} from '../controllers/account.js'; // import request & response function
import uploadImage from '../middleware/uploadImage.js';

// initialize router
const router = express.Router();

/*
  request methods   --->   https://www.tutorialspoint.com/http/http_methods.htm
  1st param = extended url path
  2nd param = middlewares (optional)
  3rd param = request & response function (controller)
*/
router.post('/register', [...registerValidations], registerController);
router.post('/login', [...loginValidations], loginController);
router.get('/', authenticateToken, getUserData);
router.put('/', authenticateToken, uploadImage, updateProfile);

export default router;
