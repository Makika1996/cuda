$(document).ready(function() {
  console.log('bla');

  circle($("#test-circle"), 90);
  circle($("#test-circle2"), 75);
  circle($("#test-circle3"), 70);
  circle($("#test-circle4"), 85);

  floatLabels();
})

function floatLabels() {
  $('input').on('change keyup', function(e) {
    if($(this).val() != '') {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  })
}

function circle(el, percent) {
  el.circliful({
      animationStep: 6,
      foregroundBorderWidth: 5,
      backgroundBorderWidth: 0,
      percent: percent,
      foregroundColor: "blue",
      backgroundColor: "grey",
      fillColor: "white"
   });
}
