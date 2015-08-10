
/*
 * This JavaScript file provides the important user related functionalities.
 * These functionalities include providing registeration page, login page, reset the password.
 * There is not much operations to be done here other than rendering the required page.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.OpenPayment=function(req, res){
	res.render('payment',{ title: 'Payment' });
};

exports.RegisterCorporateUser=function(req, res){
	res.render('registerCorporateUser', { title: 'Corporate User Registeration' });
};


exports.RegisterIndividualUser=function(req, res){
	res.render('registerIndividualUser',{ title: 'Individual/Freelance User Registeration' });
};


exports.RegisterExpert=function(req, res){
	res.render('registerExpert',{ title: 'Expert User Registeration' });
};

exports.resetPassword=function(req, res){
	res.render('resetPassword',{ title: 'Reset Password' });
};

exports.login=function(req, res){
	res.render('login');
};