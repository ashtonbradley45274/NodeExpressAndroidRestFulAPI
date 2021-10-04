module.exports = {
    apps : [{
      name   : "Customer Services API",
      script : "./index.js",
      instances: 4 ,
      exec_mode: "cluster"
    }]
  }