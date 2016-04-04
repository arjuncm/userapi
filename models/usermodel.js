var connection = require('../connection');

function manage() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from user_tbl', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(usermodel, res) {
    connection.acquire(function(err, con) {
    	var usermodel  = {id: 3, name: 'ravi',date:'01-04-16'};
      con.query('insert into user_tbl set ?', usermodel, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO creation failed'});
        } else {
          res.send({status: 0, message: 'TODO created successfully'});
        }
      });
    
    });
  };

  this.update = function(usermodel, res) {
    connection.acquire(function(err, con) {
      con.query('update user_tbl set ? where id = ?', [usermodel, usermodel.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO update failed'});
        } else {
          res.send({status: 0, message: 'TODO updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from user_tbl where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}

module.exports = new manage();
