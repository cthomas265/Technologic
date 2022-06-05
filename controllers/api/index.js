const router = require('express').Router();

const userRoutes = require('./userroutes');
const postRoutes = require('./postroutes');
const commentRoutes = require('./commentroutes');

router.use('/userseeds', userRoutes);
router.use('/postseeds', postRoutes);
router.use('/commentseeds', commentRoutes);

module.exports = router;