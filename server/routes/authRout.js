import Express from "express";
import registerController from '../controllers/registerController.js';



// router object 
const router = Express.Router();

// routing
// REGISTER
router.post('/register', registerController);


export default router;