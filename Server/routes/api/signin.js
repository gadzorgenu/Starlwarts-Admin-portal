const User =require('../../models/User');
const UserSession = require('../../models/UserSession');


module.exports = (app) => {
    // app.get('/api/counters', (req, res, next) => {
    //   Counter.find()
    //     .exec()
    //     .then((counter) => res.json(counter))
    //     .catch((err) => next(err));
    // });
  
    // app.post('/api/counters', function (req, res, next) {
    //   const counter = new Counter();
  
    //   counter.save()
    //     .then(() => res.json(counter))
    //     .catch((err) => next(err));
    // });


    //Sign up
    app.post('/api/account/signup', (req,res,next)=>{
        const {body}= req;
        console.log('body', body);
        const {
            fullName,
            password
        }= body;
        let {
            email,
        } = body;

        if(!fullName){
           return res.send({
                success:false,
                message: 'Error: Full name must be provided,'
            });
        }
        if(!email){
           return res.send({
                success:false,
                message: 'Error: Email cannnot blank,'
            });
        }
        if(!password){
             return res.send({
                success:false,
                message: 'Error: password required,'
            });
        }
        email = email.toLowerCase();

        console.log('here');
        
        //Steps
        //1. Verify email not integrated
        //2. Save

        User.find({
            email: email
        }, (err,previousUsers) =>{
            if(err){
               return res.send({
                    success:false,
                    message: 'Error: Server error,'
                });
            } else if(previousUsers.length>0){
                return res.send({
                    success:false,
                    message: 'Error: Account already exist.'
                });
            }

            //Saving  the new User
            const newUser = new User();
            newUser.fullName = fullName;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.save ((err,user) =>{
                if(err){
                    return res.end({
                        success:false,
                        message: 'Error: Server error,'
                    });

                }
                return res.send({
                    success:false,
                    message: 'Signed up,'
                });
            });
        });

    });

    app.post('/api/account/signin', (req,res,next)=>{
        const {body}= req;
        const {
            password
        }= body;
        let {
            email,
        } = body;



        if(!email){
            return res.send({
                 success:false,
                 message: 'Error: Email cannnot be blank,'
             });
         }
         if(!password){
              return res.send({
                 success:false,
                 message: 'Error: password required,'
             });
         }

         email = email.toLowerCase();

         //Verifying the user
         User.find({
             email: email
         },(err,users)=>{
              if(err){
                  console.log('err 2:', err)
                  return res.send({
                      success: false,
                      message: 'Error: server error'
                  });
              }
              //checking for more than one user
              if(users.length !=1 ){
                  return res.send({
                      success: false,
                      message: 'Error: invalid'
                  });
              }

              const user = users[0];
              //checking if user password is invalid
              if(!user.validPassword(password)){
                  return res.send({
                      success: false,
                      message:'Error: Invalid'
                  });
              }
              //correct user
              const userSession = new UserSession();
              userSession.userId = user._id;
              userSession.save((err,doc)=>{
                 if(err){
                    console.log(err);
                     return res.send ({
                         sucess: false,
                         message:'Error: server error'
                     });
                 }else{
                    return res.redirect('/Dashboard');
                 }
                 
              });
         });
    });

    app.post('/api/account/verify', (req,res,next)=>{
        //getting the token
        const{ query} =req;
        const {token }= query;

        //token test


        //verifying that the token is not deleted
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err,sessions)=>{
            if(err){
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            if(sessions.length!=1){
                return res.send({
                    success: true,
                    message: ''
                    
                });
            } else {
                return res.send({
                    success: true,
                    message: 'Good'
                })
            }
           
        });
    });

    app.get('/api/account/logout',(req,res,next) =>{
         //getting the token
         const{ query} =req;
         const {token }= query;
 
         //token test
 
 
         //verifying that the token is not deleted
         UserSession.findOneAndUpdate({
             _id: token,
             isDeleted: false
         },
            {
                $set: {
                    isDeleted: true
            }
        },
             null,(err,sessions)=>{
             if(err){
                 console.log(err);
                 return res.send({
                     success: false,
                     message: 'Error: server error'
                 });
             
             } 
             return res.send({
                success: true,
                message: 'Good'
                 });       
           });
    });
}; 