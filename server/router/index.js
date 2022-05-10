const router = require('express').Router();
const { body } = require('express-validator');
const userController = require('../controller/user-controller');
const authMiddleware = require('../middleware/auth.middleware');
const apiData = require('../controller/api');
const upload = require('../middleware/multer.middleware');
const blogController = require('../controller/blog-controller');
const historyController = require('../controller/history-controller');
const commentController = require('../controller/comment-controller');

// auth route
router.post(
  '/registration',
  body('email').isEmail().withMessage('Email is not valid'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

// api
router.get('/city', apiData.home);
router.post('/price', apiData.price);
router.get('/currency', apiData.currency);

// user profile routes
router.get('/userprofile/:id', userController.getUserProfile);
router.patch('/userprofile/:id', upload.single('file'), userController.updateUserProfile);

// blog routes
router.get('/blog', blogController.getAllPosts);
router.get('/blog/:id', blogController.getPostById);
router.post('/blog', authMiddleware, blogController.createPost);
router.patch('/blog/:id', authMiddleware, blogController.updatePost);
router.delete('/blog/:id', authMiddleware, blogController.deletePost);

// history routes
router.get('/history/:id', historyController.getAllHistory);
router.post('/history', historyController.createHistory);
router.delete('/history/:id', authMiddleware, historyController.deleteHistory);

//comment routes
router.post('/comment', authMiddleware, commentController.createComment);
router.delete('/comment/:id', authMiddleware, commentController.deleteComment);
router.get('/comment/:id', authMiddleware, commentController.getComments);

module.exports = router;
