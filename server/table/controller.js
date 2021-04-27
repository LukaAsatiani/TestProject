const service = require("./service");

module.exports = {
  get: (req, res) => {
    service.get(req.body, (err, results) => {
      service.get({filter: req.body.filter}, (err1, results1) => {
        if (err || err1) {
          return res.status(200).json({
            success: false,
            message: "Database connection errror"
          });
        }
        
        return res.status(200).json({
          success: true,
          count: Math.floor((results1.length + req.body.limit - 1) / req.body.limit),
          table: results
        })
      })
    });
  }
}