var axios = require('axios');
var datas = {}
function getUserInfo() {
  return axios.get('https://script.google.com/macros/s/AKfycbwVPjEhtp4Jg7kWnVmvYLt6rL6UKrq-5kyIaXWVuZ1wDduqMdSl/exec')
};

function postUserInfo(datum) {
  var datam = JSON.stringify(datum)
  // console.log(JSON.parse(JSON.stringify(datam)))
  return axios.post('https://script.google.com/macros/s/AKfycbwVPjEhtp4Jg7kWnVmvYLt6rL6UKrq-5kyIaXWVuZ1wDduqMdSl/exec', datam );
}

var helpers = {
  getInfo: function() {
    return axios.all([getUserInfo()])
      .then(function(arr){
        return {
          email: arr[0].data.email,
          name: arr[0].data.name,
          title: arr[0].data.title,
          desc: arr[0].data.desc
        }
      });
  },
  postInfo: function() {
    return axios.all([postUserInfo(datas)])
      .then(function(arr){
        //datas = {}
        return {
          response: arr[0].data.response
        }
      });
  },
  valueChange: function(val, title) {
    datas[title] = val
    // console.log(JSON.stringify(datas))
  }
};

module.exports = helpers;
