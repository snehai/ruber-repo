
var paypal = require('paypal-rest-sdk');

paypal.configure({
	  'mode': 'sandbox',//live
	  'client_id': 'ATprY9T4O5hCnDBOmOglhbtYxCbzhpTHfhcY2ZmEiUZe9xOak69R8EPA9UT1m4qTu8Fp4EEANv2hTByw',
	  'client_secret': 'EEuLhM5O3xEobm2al4s2eDe1iDzUEhb8ceTJ7R_Y4eTMYIKik78CD5JToBqIk7tJZFyNq73DPafr7CTe' 
	  // 'mode': 'live',
	   //'client_id': 'AaHg9Wsxd9o6iPhG3D9E2P4AVJ6YpHBqoNJymMEWAjy1eAUmXbSg7kDH0YGMK-kcKTCZpqie2hiaG9Te',
	   //'client_secret': 'EKwhwzcuba-5UDEeJKaVhofkukCC4m8-JSxGq0TaVrzUhhPZ1voqmzXAEMTzENeeh94e7uMiY4a6CMi2' 
	});


function payout(receipt, callback) {
	var batchId = Math.random().toString(36).substring(9),
	  currenttime = new Date().toString().substring(0,25);

	var payoutParams = {
	  'sender_batch_header': {
	    'sender_batch_id': batchId,
	    'email_subject': 'Test '+currenttime
	  },
	  items: [{
		      'recipient_type': 'EMAIL',
		      'receiver': receipt.email,
		      'note': 'note '+ currenttime,
		      'sender_item_id': 'Test sender ',
		      'amount': {
		        'value': receipt.amount,
		        'currency': 'USD'
		      }}]
	  }
	
	paypal.payout.create(payoutParams, 'true', callback);
	  
}



exports.initiatePayment = function(req, res){
	var email = req.param('email'),
		amt = req.param('amt');
	console.log('Email:'+email);
	console.log('Amt:'+amt);
	if(email && amt){
		payout({
			  email: email,
				  amount: amt
				}, function (error, success) {
					console.log('**Response**');
					if(error){
						res.send(JSON.stringify(error));
					}
					else{
						res.send(JSON.stringify(success));
					}
				  
				  
				});
	}
	
}

exports.initiateStripePayment = function(req, res){
	//console.log(req);
	var stripe = require("stripe")("sk_test_hc3wyJP0qMnq43r6iBuXodBv");

	// (Assuming you're using express - expressjs.com)
	// Get the credit card details submitted by the form
	var stripeToken = req.body.stripeToken;
//alert('stripetoken '+stripeToken);
	//console.log(stripeToken);
	var charge = stripe.charges.create({
	  amount: 1000, // amount in cents, again
	  currency: "usd",
	  source: stripeToken,
	  description: "Example charge"
	}, function(err, charge) {
		console.log('**Response**');
		
		if(err){
			console.log('**Error***');
			res.send(JSON.stringify(err));
		}
		else{
			console.log('**success***');
			res.send(JSON.stringify(charge));
		}
	  
	  if (err && err.type === 'StripeCardError') {
	    // The card has been declined
	  }
	});
	
}


