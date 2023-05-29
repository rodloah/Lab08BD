var express = require('express');
var router = express.Router();

var producto = require('../controllers/ProductoController.js');

router.get('/', producto.listpro);
router.get('/showpro/:id', producto.showpro);
router.get('/createpro', producto.createpro);
router.post('/savepro', producto.savepro);
router.get('/editpro/:id', producto.editpro);
router.post('/updatepro/:id', producto.updatepro);
router.post('/deletepro/:id', producto.deletepro);

module.exports = router;