var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('beispiel', {dataLeft : "DATA LEFT SOME STUFF",
                          dataMiddle : "sOmE DiFeReNt DaTa MiDlE",
                          dataRight : "allright here"});
});

module.exports = router;
