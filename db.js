var levelup = require('levelup');

var db = levelup('./linkdb');

exports.store = function(req, res, next) {
  db.put(req.token, req.body.link, function(err) {
    if (err) {
      res.status(500).send('500 internal server error');
    } else {
      next();
    }
  });
};

exports.load = function(req, res, next) {
  db.get(req.params.token, function(err, link) {
    if (err) {
      if (err.notFound) {
        res.status(404).send('404 not found');
      } else {
        res.status(500).send('500 internal server error');
      }
    } else {
      req.link = link;
      next();
    }
  });
};
