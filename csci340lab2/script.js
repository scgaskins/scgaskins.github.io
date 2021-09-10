$(document).ready(function() {
  $('#basic').click(function() {
    changeAllCats("");
  });

  $('#blur').click(function() {
    changeAllCats("&filter=blur");
  });

  $('#mono').click(function() {
    changeAllCats("&filter=mono");
  });

  $('#sepia').click(function() {
    changeAllCats("&filter=sepia");
  });

  $('#negative').click(function() {
    changeAllCats("&filter=negative");
  });

  $('#paint').click(function() {
    changeAllCats("&filter=paint");
  });

  $('#pixel').click(function() {
    changeAllCats("&filter=pixel");
  });

  function changeAllCats(filter) {
    var numCats = 9;
    for (var i = 1; i <= numCats; i++) {
      changeCat(i, filter);
    }
    changeNames(numCats);
  }

  function changeCat(catIndex, filter) {
    $.ajax({
      dataType: "json",
      url: "https://cataas.com/cat?json=true&width=400&type=sq" + filter,
      success: function(catResult) {
        var id = catResult["id"];
        //console.log(id);
        $("#cat-" + catIndex).attr("src", "https://cataas.com/cat/" + id + "?width=400&type=sq" + filter);
      },
      error: function(xhr, status, error) {
        console.log(error);
        $("#cat-" + catIndex).attr("src", "http://placekitten.com/400/400");
      }
    });
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
  }
});
