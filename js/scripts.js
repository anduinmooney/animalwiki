$(document).ready(function() {

  $("#form1").submit(function() {
    console.log("hello");
    var animal = $("input:radio[name=animal]:checked").val();

    console.log(animal);

    if (animal === "cat") {
      $('#cat').show();
      $('#dog').hide();
      $('#elk').hide();
    }

    else if (animal === "dog") {
      $('#dog').show();
      $('#cat').hide();
      $('#elk').hide();
    }

    else {
      $('#elk').show();
      $('#cat').hide();
      $('#dog').hide();
    }
    event.preventDefault();
  });
});
