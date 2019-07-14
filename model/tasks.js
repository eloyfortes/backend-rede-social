const con = require('../config/database')

var Task = {

 selectAllUsers: function(callback){
  
return con.query('SELECT * FROM usuarios',callback);

},

selectUserByEmail: function(email,callback){
  
return con.query('SELECT * FROM usuarios where email = ?',[email],callback);

},

createUser: function(User,callback){
 


    return con.query("insert into usuarios (usuario,email,senha) values(?,?,?)",[User.Name,User.Email,User.Senha],callback);
    
    },

   loginUser: function(User,callback){
 


        return con.query("SELECT id,usuario,email from usuarios where email = ? and senha = ?",[User.Email,User.Senha],callback);
        
        },
        getPosts: function(User,callback){
 
            

            return con.query("SELECT DATE_FORMAT(t.data_inclusao, '%d %b %Y %T') AS data_inclusao_formatada, t.tweet, u.usuario,id_tweet   FROM tweet AS t JOIN usuarios AS u ON (t.id_usuario = u.id) WHERE id_usuario = ?  OR id_usuario IN (select seguindo_id_usuario from usuarios_seguidores where id_usuario = ?)  ORDER BY data_inclusao DESC",[User.id,User.id],callback)
            
            },
           setPost: function(Post,callback){
 


                return con.query("INSERT INTO tweet(tweet,id_usuario)values(?, ?)",[Post.text,Post.userID],callback);
                
                },
                searchUsers: function(callback){

                    return con.query("SELECT usuario as title,email as description  FROM usuarios",callback)
                },
                getUserById: function(users, callback){

                    return con.query(" SELECT * FROM usuarios where usuario = ?",[users.id],callback)
                },
                addToFriends:function(users,callback){

                    return con.query("INSERT INTO usuarios_seguidores(id_usuario, seguindo_id_usuario)values(?,?)",[users.Id,users.idU],callback)
                }


}

module.exports =  Task