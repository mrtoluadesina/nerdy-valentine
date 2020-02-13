$('#form').submit(e => {
  e.preventDefault();

  //set data values
  let to = $('#to').val();
  let from = $('#from').val();
  let body = $('#body').val();

  console.log(to, from, body);

  $.ajax({
    type: 'POST',
    url: 'form/submit.php',
    data: 'to=' + to + '&from=' + from + '&body=' + body,
    success: function(data) {
      //Perform logic based on response
      //Check if positive response
      if (data) {
        //Do something
        //Show response somewhere
      } else {
        //Show error meesage somewhere
      }
    },
    beforeSend: function() {
      //Perform logic to show spinner some where or anything you like
    },
  });
});
