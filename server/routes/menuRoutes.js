const indexSchema  = require('../model/index')
const mongoose = require('mongoose');

module.exports = function(router){
    router.post('/menu', async (req, res) => {
     indexSchema.menuSchema.create({
        ...req.body
     })
     if(indexSchema.shopKeeperSchema.create()){
        return res.status(201).send({ 
         message : "Menu Added", 
     }) 
     }
     return;
    });
    router.get('/menu/:id', async (req, res) => {
        try{
            // mongoose.Types.ObjectId.isValid('your id here');
            const data = await indexSchema.menuSchema.find({
                shopkeeper_id: req.params.id});
            res.json(data)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    })
}