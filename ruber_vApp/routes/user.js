
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.RegisterCorporateUser=function(req, res){
	res.render('registerCorporateUser', { title: 'Corporate User Registeration' });
};


exports.RegisterIndividualUser=function(req, res){
	res.render('registerIndividualUser',{ title: 'Individual/Freelance User Registeration' });
};


exports.RegisterExpert=function(req, res){
	res.render('expert',{ title: 'Expert User Registeration' });
};

exports.resetPassword=function(req, res){
	res.render('resetPassword',{ title: 'Reset Password' });
};

exports.login=function(req, res){
	res.render('login');
};