const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  res.render('logged');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile/', (req, res) => {
  res.render(req.user ? 'profile' : 'noPermission');
});

router.get('/profile/settings', (req, res) => {
  res.render(req.user ? 'profileSettings' : 'noPermission');
});


module.exports = router;