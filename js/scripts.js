$(document).ready(function(){
  $("form#work-transportation").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work]:checked").each(function(){
      var transportationMode = $(this).val();
      console.log(transportationMode)
      $('#work-responses').append(transportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
