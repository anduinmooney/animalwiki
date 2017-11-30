$(document).ready(function() {

  $("#form1").submit(function() {
    console.log("hello");
    var animal = $("input:radio[name=animal]:checked").val();

    console.log(animal);

    if (animal === "cat") {
      $('#cat').show();
    }

    else if (animal === "dog") {
      $('#dog').show();
    }

    else {
      $('#elk').show();
    }
    event.preventDefault();
  });
});
