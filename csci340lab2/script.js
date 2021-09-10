$(document).ready(function() {
  $('#random').click(function() {
    changeAllCats();
  });

  function changeAllCats() {
    var numCats = 6
    for (var i = 1; i <= numCats; i++) {
      getCatUrl(i);
    }
    changeNames(numCats);
  }

  function getCatUrl(catIndex) {
    $.ajax({
      dataType: "json",
      url: "https://cataas.com/cat?json=true&width=400&type=sq",
      success: function(catResult) {
        var id = catResult["id"];
        //console.log(id);
        $("#cat-" + catIndex).attr("src", "https://cataas.com/cat/" + id + "?width=400&type=sq");
      },
      error: function(xhr, status, error) {
        console.log(error);
        $("#cat-" + catIndex).attr("src", "http://placekitten.com/400/400");
      }
    });
    //return catUrl;
  }

  function changeNames(numCats) {
    $.ajax({
      url: 'https://randomuser.me/api/?results=' + numCats,
      dataType: 'json',
      success: function(data) {
        //console.log(data);
        for (var i=0; i<numCats; i++){
          var name = data["results"][i]["name"]["first"];
          console.log(name);
          $("#name-" + (i+1)).text(name);
        }
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
    //return name;
  }
});
