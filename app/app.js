let $ = require('jquery');

$(function () {
  
  $('#getdata').on('click', function () {

    $.ajax({
      type: 'get',
      url: '/pros',
      success(data) {
        console.log('data ==> ', data);
      }
    })

  })

  $('#save').on('click', function () {

    $.ajax({
      type: 'get',
      url: '/about',
      data: {
        id: 16
      },
      success(res) {
        console.log('res ==> ', res);
      }
    })

  })

})