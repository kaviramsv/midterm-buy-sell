// Client facing scripts here
const submitForm = function() {
    if (!$("#toy_name").val()) {
      $("#errorMessage").html("Toy Name is empty!");
      $("#alert1").slideDown();
      setTimeout(function () { $("#alert1").slideUp(); }, 3000);
      return false;
    };
    if (!$("#description").val()) {
      $("#errorMessage").html("Description is empty!");
      $("#alert1").slideDown();
      setTimeout(function () { $("#alert1").slideUp(); }, 3000);
      return false;
    };
    // if (!$("#image-url").val()) {
    //   $("#errorMessage").html("Image URL is empty!");
    //   $("#alert1").slideDown();
    //   setTimeout(function () { $("#alert1").slideUp(); }, 3000);
    //   return false;
    // };
    if (!$("#price").val()) {
      $("#errorMessage").html("Price is required!");
      $("#alert1").slideDown();
      setTimeout(function () { $("#alert1").slideUp(); }, 3000);
      return false;
    };
    return true;
  };
