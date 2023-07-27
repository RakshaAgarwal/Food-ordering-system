const indexSchema  = require('../model/index')
module.exports = function(router){
    router.post('/student/login', (req, res) => { 
        // Find user with requested email 
       
        indexSchema.studentSchema.findOne({ email : req.body.email })
        .then((user)=>{
             if (user === null) { 
                return res.status(400).send({ 
                    message : "User not found."
                }); 
            } 
            else{
                
                    if (user.validPassword(req.body.password)) { 
                    return res.status(201).send({ 
                        message : "User Logged In", 
                    }) 
                    
                } else return res.status(400).send({ 
                    message : "Wrong Password"
                }); 
            }
        })
        .catch((err)=>{
             return res.status(400).send({ 
                        message : "Wrong Password"
                    }); 
        })
        
        
        // indexSchema.studentSchema.findOne({ email : req.body.email }, function(err, user) { 
        //     if (user === null) { 
        //         return res.status(400).send({ 
        //             message : "User not found."
        //         }); 
        //     } 
        //     else { 
        //         if (user.validPassword(req.body.password)) { 
        //             return res.status(201).send({ 
        //                 message : "User Logged In", 
        //             }) 
        //         } 
        //         else { 
        //             return res.status(400).send({ 
        //                 message : "Wrong Password"
        //             }); 
        //         } 
        //     } 
        // }); 
    }); 

    router.post('/student/signup', (req, res, next) => { 
        // Creating empty user object 
            let newUser = new indexSchema.studentSchema(); 
            // Initialize newUser object with request data 
            newUser.name = req.body.name, 
            newUser.email = req.body.email,
            newUser.password=req.body.password
                            // Call setPassword function to hash password 
                            newUser.setPassword(req.body.password); 
        
            // Save newUser object to database 
           newUser.save()
           .then(()=>{
            return res.status(201).send({ 
                message : "User added successfully."
            }); 
           })
           .catch((err)=>{
            return res.status(400).send({ 
                message : "Failed to add user."
            }); 
           }); 
        }); 
    
}