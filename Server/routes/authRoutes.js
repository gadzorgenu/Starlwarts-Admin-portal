
const passport= require('passport');
module.exports= app =>{
    app.get(
        '/auth/google', 
        //authenticating the user with google
        passport.authenticate('google',{
        //asking google to grant access to the user's profile info and email address
        scope: ['profile', 'email']
        }) 
    );
    
    //route handler to process user input
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        //redirecting users after they are logged in
        (req,res )=>{
            res.redirect('/home');
        }
     ); 

    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user',(req,res)=>{
        //getting access to the user
        res.send(req.user);
    });

};

