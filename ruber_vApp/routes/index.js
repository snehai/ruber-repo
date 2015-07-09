
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Ruber Video Conferencing' });
};