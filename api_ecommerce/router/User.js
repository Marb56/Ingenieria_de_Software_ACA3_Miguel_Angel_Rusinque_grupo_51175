import routerx from 'express-promise-router'
import usercontroller from '../controllers/UserController'
import auth from '../middleware/auth'

const router = routerx();
//http://Localhost:3000/api/users/register

router.post("/register",usercontroller.register);
router.put("/update",usercontroller.update);
router.get("/list",auth.verifyAdmin,usercontroller.List);
router.post("/login",usercontroller.login);
router.delete("/delete",usercontroller.remove);

export default router;
