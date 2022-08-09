const axios = require("axios");
const FormData = require('form-data');
const fs = require("fs");

const postReq = () => {
  var data = new FormData();
  data.append('payload', fs.createReadStream('./payload.jpg'));
  
  var config = {
    method: 'get',
    url: 'http://www.neeco1.com/',
    headers: { 
      'api-key': 'sdfmoi32elkwm34', 
      'Cookie': '7cd4399ff11404f0f53f54ec8a8d0b39=ae19f4c3d023a31c85ab6c714ac8efc8', 
      ...data.getHeaders()
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.status));
  })
  .catch(function (error) {
    console.log(error);
  });
}

setInterval(() => {
  postReq()
}, 100)
// postReq()