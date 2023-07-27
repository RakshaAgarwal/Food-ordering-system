const indexSchema  = require('../model/index')

module.exports = function(router){
    router.post('/shopkeeper/signup', async (req, res) => {
     console.log(req.body, '------------',indexSchema);
    await indexSchema.shopKeeperSchema.create({
        ...req.body
     })
     if(indexSchema.shopKeeperSchema.create()){
        return res.status(201).send({ 
         message : "User Signed Up", 
     }) 
     }
     return;
    });

    router.get('/shops', async (req, res)=>{
        let a = await indexSchema.shopKeeperSchema.find()
        console.log(a[0]._id.toString())
        console.log(res)
        res.json(a)
    })
}