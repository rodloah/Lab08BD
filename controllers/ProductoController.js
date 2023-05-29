var mongoose = require('mongoose');
var Producto = require("../models/Producto");

var productoController = {};

productoController.listpro = function(req, res){
    
    Producto.find({}).exec(function(err, productos){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/usuario/index', {productos: productos,titulo:'INDEX'} );
        
    });
    
};

productoController.showpro = function(req, res){
    Producto.findOne({_id: req.params.id}).exec(function(err, producto){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/usuario/showpro', {producto: producto} );
    });
    
};

productoController.createpro = function(req, res){
    res.render('../views/usuario/createpro');
};

productoController.savepro = function(req, res){
    var producto = new Producto( req.body );
    
    producto.savepro(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a usuario. :)");
        res.redirect("/productos/showpro/"+producto._id);
        //res.redirect("/productos");
    });
};

productoController.editpro = function(req, res) {
  Producto.findOne({_id: req.params.id}).exec(function (err, producto) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/usuario/editpro", {producto: producto});
    
  });
};

productoController.updatepro = function(req, res){
    Producto.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio,
        lote: req.body.lote
    }}, { new: true },
    function( err, producto){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/usuario/edit', {producto: req.body} );
        }
        
        console.log( producto );
        
        res.redirect('/usuarios/show/' + producto._id);
        
    });
};

productoController.deletepro = function(req, res){
    
    Producto.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Usuario deleted!");
        res.redirect("/productos");
    });
    
};

module.exports = productoController;