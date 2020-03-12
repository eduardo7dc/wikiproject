$(document).ready(function(){
  $('#searchSubmit').click(function(){
    var searchTerm = $('#inputsearch').val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      success: function(data){
        $('#display-result').html('');
        for (i=0; i<data[1].length; i++){
       $('#display-result').append("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert('Error');
      }
      
           });
  });
  
  $("#inputsearch").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#searchSubmit").click();
    }
  });  
  
});