var count = function(countTo, countBy) {
  var quotient = Math.floor( countTo / countBy );
  var result = 0;
  var array = [];
  for (var i = 1; i <= quotient; i++) {
    result = Math.floor(i * countBy)
    array.push(result);
    console.log(array);
  }
  return array;
};



$(document).ready(function(event) {
    $("form#count").submit(function(event){

      var countTo = $("input#countto").val();
      var countBy = $("input#countby").val();
      var result = count(countTo, countBy);

  $(".result").text(result);
  $("#result").show();
  event.preventDefault();

});
});
