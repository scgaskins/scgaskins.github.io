$(document).ready(function() {
  $('#random').click(function() {
    getAdviceAndAddCat();
  });

  function getAdviceAndAddCat() {
    $.ajax({
      dataType: "json",
      url: "https://api.adviceslip.com/advice",
      success: function(result) {
        var advice = result["slip"]["advice"];
        console.log("Advice: " + advice);
        addCat(advice);
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  }

  function addCat(caption) {
    $.ajax({
      dataType: "json",
      url: "https://cataas.com/cat?json=true&width=400&type=sq",
      success: function(catResult) {
        var id = catResult["id"];
        console.log(id);
        $("#cat").attr("src", "https://cataas.com/cat/" + id + "/says/" + caption + "?width=400&type=sq");
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  }
});
