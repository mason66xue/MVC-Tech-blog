const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const signupRoutes = require('/signupRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/signup', signupRoutes);

module.exports = router;
