//
// linkRegex is based on:
// http://stackoverflow.com/a/8218223
//

var linkRegex = /^http(s)?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+[a-zA-Z0-9_.,@?^=%&;:/~+#-]*$/;
var linkLength = 250;

module.exports = function(req, res, next) {
  if (linkRegex.test(req.body.link)
  &&  req.body.link.length <= linkLength) {
    next();
  } else {
    res.redirect('/');
  }
}
