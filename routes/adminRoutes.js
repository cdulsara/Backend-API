const express = require('express');

const { searchGigs, searchUsers } = require('../route_handlers/adminHandler');
const {
  protect,
  restrictTo,
  adminLogin,
  logout,
} = require('../route_handlers/authHandler');

const router = express.Router();

router.post('/login', adminLogin);
router.get('/logout', protect, restrictTo('admin'), logout);

router.use(protect);
router.use(restrictTo('user')); // to be changed to  admin

// routes
router.route('/search/gigs/:param/:value').get(searchGigs);
router.route('/search/users/:param/:value').get(searchUsers);

module.exports = router;
