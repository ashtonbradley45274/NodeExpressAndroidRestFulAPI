const sql = require("./mysqlconnections.js");

// constructor
const Customer = function(customer) {
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
  };

  Customer.getAll = (req, resp) => {
    let query = "SELECT id, email , `name`, active FROM customers";
    if(req.body.name != undefined){
     query += " where name = '"+req.body.name+"'";
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        resp.json(err);
        return;
      }
  
      console.log("customers: ", res);
      resp.json(res);
    });
  };

  Customer.addUser = (req, resp) => {
    let query = "";
    if(req.body.name != undefined && req.body.email != undefined ){
     query = "INSERT INTO customers (name , email , active) VALUES ('"+req.body.name+"','"+req.body.email+"',1)";
    }

    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        resp.json(err);
        return;
      }

      console.log("customers: ", res);
      resp.json(res);
    });
  };

  module.exports = Customer;