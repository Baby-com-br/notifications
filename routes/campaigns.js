var express = require("express");
var router = express.Router();
var websocket = require('socket.io');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
   var io = global.io;
   io.emit("resposta", req.params.id);
   res.send(200);
});

module.exports = router;
