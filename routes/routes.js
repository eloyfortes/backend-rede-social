var express = require('express');  
var router = express.Router();  
var Task = require('../model/tasks');  





router.get('/users', function(req, res, next) {  
    Task.selectAllUsers(function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.send(JSON.stringify({"status": 200, "error": null, "response": rows }))
            console.log(res,req);
        }  
    });  
});  


router.get('/userByEmail/:email?', function(req, res, next) {  
    Task.selectUserByEmail(req.params.email,function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
            console.log(res,req);
        }  
    });  
}); 

router.post('/createUser', function(req, res, next) {  
    Task.createUser(req.body,function(err, response) {  
        if (err) {  
           
            res.json(err);  
        } else {  
           console.log(res);
            res.send(JSON.stringify({"status": 200, "error": null, "response": response}));
           
          
        }  
    });  
}); 


router.post('/getPost', function(req, res, next) {  
    Task.getPosts(req.body,function(err, response) {  
        if (err) {  
           
            res.json(err);  
        } else {  
           console.log(res);
            res.send(JSON.stringify({"status": 200, "error": null, "response": response}));
           
          
        }  
    });  
});

router.post('/setPost', function(req, res, next) {  
    Task.setPost(req.body,function(err, response) {  
        if (err) {  
           
            res.json(err);  
        } else {  
           console.log(res);
            res.send(JSON.stringify({"status": 200, "error": null, "response": response}));
           
          
        }  
    });  
});

router.post('/getUsers', function(req, res, next) {  
    Task.searchUsers(req.body,function(err, response) {  
        if (err) {  
           
            res.json(err);  
        } else {  
           console.log(res);
            res.send(JSON.stringify({"status": 200, "error": null, "response": response}));
           
          
        }  
    });  
});

router.post('/getUserByName', function(req, res, next) {  
    Task.getUserById(req.body,function(err, response) {  
        if (err) {  
           
            res.json(err);  
        } else {  
           console.log(res);
            res.send(JSON.stringify({"status": 200, "error": null, "response": response}));
           
          
        }  
    });  
});

router.post('/addToF', function(req, res, next) {  
    Task.getUserById(req.body,function(err, response) {  
        if (err) {  
           
            res.json(err);  
        } else {  
           console.log(res);
            res.send(JSON.stringify({"status": 200, "error": null, "response": response}));
           
          
        }  
    });  
});




module.exports = router
