import express from 'express';
import {logincontroller ,registercontroller,createBlog, testController, logoutController, getblogs} from "../controller/authcontroller.js"
import { requireSignIn } from '../middleware/authenticate.js';
const router = express.Router();

router.post("/login",logincontroller);
router.post("/register",registercontroller);
router.post("/createblog", requireSignIn,createBlog);
router.post("/test",requireSignIn,testController);
router.post("/logout",requireSignIn,logoutController);
router.get("/getallblogs",getblogs);


export default router;