var usermodel = require('./models/usermodel');

module.exports = {
  configure: function(app) {
    app.get('/api/', function(req, res) {
    	usermodel.get(res);
    });

    app.post('/api/', function(req, res) {
    	usermodel.create(req.body, res);
    });

    app.put('/api/', function(req, res) {
    	usermodel.update(req.body, res);
    });

    app.delete('/api/:id/', function(req, res) {
    	usermodel.delete(req.params.id, res);
    });
  }
};
