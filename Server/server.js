const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const Cors = require('cors');
const BodyParser = require('body-parser');
const Promise = require("bluebird");
require('./models/User');
require('./services/passport');

const router = express.Router();



//setting up mongoose
mongoose.Promise = Promise;
mongoose.connect( (keys.mongoURI), { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

// init app
const app =express();

app.use(
    cookieSession({
        //specifing that the cookie last 30 days in the browser before expiring in milliseconds
        
        maxAge: 30 * 24 * 60 * 60 * 1000,
        //encrypting the cookie
        keys: [keys.cookieKey]
    })
);

//middlewares (preprocessing of incoming request before being sent off to the different route handlers)
app.use(passport.initialize());
app.use(passport.session());

const PORT =process.env.PORT || 5000;




app.use(BodyParser.urlencoded({ extended: true }));
app.use(Cors())

//Routes

//returning a function with the app object
require('./routes/authRoutes')(app);

const customerRouter = require('./routes/Customer_Info');
app.use('/customers', customerRouter);

const productRouter = require('./routes/Product');
app.use('/notifications', productRouter);

const purchasesRouter = require('./routes/Purchase');
app.use('/orders', purchasesRouter);




app.listen(PORT, () => console.log('server started')); 
