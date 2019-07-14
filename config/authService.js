var Task = require('../model/tasks'); 
var jwt = require('jsonwebtoken');
const env = require('./.env')


  const login = (req,res,next) => {
   
    Task.loginUser(req.body,function(err, response) { 
   

        if (err) {  
           
            res.send(JSON.stringify({"status":400, "error": err, "response": response}));
        } else {  
           if(response.length > 0){
          



            const user = response[0]
          const token =  jwt.sign(user,env.authSecret)
        user.token = token

                res.send(JSON.stringify({"status": 200, "error": null, "response": {user: user}}));


           
        
        
        }
            else{
            res.send(JSON.stringify({"status": 204, "error": null, "response": "Usuario ou email incorretos" }));
           }
          
        }  
    });  
}

const validateToken = (req, res, next) => {
      const token = req.body.token || ''
      jwt.verify(token, env.authSecret, function(err, decoded) {
      return res.status(200).send({valid: !err})
      })
    }

    module.exports = {login,validateToken}

