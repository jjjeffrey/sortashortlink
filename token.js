var counter = 0;

module.exports = function(req, res, next) {
  req.token = counter.toString(36);
  counter++;
  next();
};
