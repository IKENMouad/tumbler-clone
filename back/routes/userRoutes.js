import express from 'express'
const router = express.Router()

import {
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.get('/', getUsers);
router
.route('/profile')
.get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)


  
  // router.post("/register", (req, res) => {
  //   // Form validation
  //   const { errors, isValid } = validateRegisterInput(req.body);
  //   // Check validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  //   User.findOne({ username: req.body.username }).then((user) => {
  //     if (user) {
  //       return res.status(400).json({ message: "Username already exists" });
  //     } else {
  //       const newUser = new User({
  //         name: req.body.name,
  //         username: req.body.username,
  //         password: req.body.password,
  //       });
  //       // Hash password before saving in database
  //       bcrypt.genSalt(10, (err, salt) => {
  //         bcrypt.hash(newUser.password, salt, (err, hash) => {
  //           if (err) throw err;
  //           newUser.password = hash;
  //           newUser
  //             .save()
  //             .then((user) => {
  //               const payload = {
  //                 id: user.id,
  //                 name: user.name,
  //               };
  //               // Sign token
  //               jwt.sign(
  //                 payload,
  //                 keys.secretOrKey,
  //                 {
  //                   expiresIn: 31556926, // 1 year in seconds
  //                 },
  //                 (err, token) => {
  //                   if (err) {
  //                     console.log(err);
  //                   } else {
  //                     req.io.sockets.emit("users", user.username);
  //                     res.json({
  //                       success: true,
  //                       token: "Bearer " + token,
  //                       name: user.name,
  //                     });
  //                   }
  //                 }
  //               );
  //             })
  //             .catch((err) => console.log(err));
  //         });
  //       });
  //     }
  //   });
  // });

  // router.post("/login", (req, res) => {
  //   // Form validation
  //   const { errors, isValid } = validateLoginInput(req.body);
  //   // Check validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  //   const username = req.body.username;
  //   const password = req.body.password;
  //   // Find user by username
  //   User.findOne({ username }).then((user) => {
  //     // Check if user exists
  //     if (!user) {
  //       return res.status(404).json({ usernamenotfound: "Username not found" });
  //     }
  //     // Check password
  //     bcrypt.compare(password, user.password).then((isMatch) => {
  //       if (isMatch) {
  //         // User matched
  //         // Create JWT Payload
  //         const payload = {
  //           id: user.id,
  //           name: user.name,
  //         };
  //         // Sign token
  //         jwt.sign(
  //           payload,
  //           keys.secretOrKey,
  //           {
  //             expiresIn: 31556926, // 1 year in seconds
  //           },
  //           (err, token) => {
  //             res.json({
  //               success: true,
  //               token: "Bearer " + token,
  //               name: user.name,
  //               username: user.username,
  //               userId: user._id,
  //             });
  //           }
  //         );
  //       } else {
  //         return res
  //           .status(400)
  //           .json({ passwordincorrect: "Password incorrect" });
  //       }
  //     });
  //   });
  // });
  
  
export default router
