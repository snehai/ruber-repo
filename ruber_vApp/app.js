
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , register = require('./routes/register')
  , payment = require('./routes/payment')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/signup', routes.index);
app.get('/corporateUser', user.RegisterCorporateUser);
app.get('/individualUser', user.RegisterIndividualUser);
app.get('/payment', user.OpenPayment);
app.get('/expert', user.RegisterExpert);
app.get('/resetPassword', user.resetPassword);

app.post('/registerIndividualUser', register.confirmIndividualUser);
app.post('/registerCorporateUser', register.confirmCorporateUser);
app.post('/registerExpertUser', register.confirmExpertUser);
app.post('/intiatePayment', payment.initiatePayment);
app.post('/initiateStripePayment', payment.initiateStripePayment);

app.get('/login', user.login);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
