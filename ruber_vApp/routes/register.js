/**
 * This JavaScript file is for verifying and providing the registerataion actions.
 * Here the data from the front end is to be processed and stored in the database.
 */
exports.confirmIndividualUser = function(req, res){

	var email=req.param('emailid');
	var nodemailer=require('nodemailer');
	
	var transporter = nodemailer.createTransport({
		service: 'yahoo',
		auth: {
			user: 'ruber_mod@yahoo.com',
			pass: 'Conf@123'
		}
	});
	console.log(email);
	var mailOptions = {
		    from: 'Ruber  <ruber_mod@yahoo.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Thank you for account creation ', // Subject line
		    text: 'Hello, \n Thank you for creating you account.\n Please confirm your account details by clicking below. ', // plaintext body
		   
		};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});
	
	res.send(" Please check your email");
	
};

exports.confirmCorporateUser = function(req, res){

	var email=req.param('emailid');
	var nodemailer=require('nodemailer');
	
	var transporter = nodemailer.createTransport({
		service: 'yahoo',
		auth: {
			user: 'ruber_mod@yahoo.com',
			pass: 'Conf@123'
		}
	});
	console.log(email);
	var mailOptions = {
		    from: 'Ruber  <ruber_mod@yahoo.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Thank you for account creation ', // Subject line
		    text: 'Hello, \n Thank you for creating you account. \n Please confirm your account details by clicking below. ', // plaintext body
		   
		};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});
	
	res.send(" Please check your email");
	
};


exports.confirmExpertUser = function(req, res){

	var email=req.param('emailid');
	var nodemailer=require('nodemailer');
	
	var transporter = nodemailer.createTransport({
		service: 'yahoo',
		auth: {
			user: 'ruber_mod@yahoo.com',
			pass: 'Conf@123'
		}
	});
	console.log(email);
	var mailOptions = {
		    from: 'Ruber  <ruber_mod@yahoo.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Thank you for account creation ', // Subject line
		    text: 'Hello, \n Thank you for creating you account. \n Please confirm your account details by clicking below. ', // plaintext body
		   
		};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});
	
	res.send(" Please check your email");
	
};
