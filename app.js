$(function(){
  // console.log("jquery");

  var movie1 = {};
  var movie2 = {};
  var movie3 = {};

  $.ajax({
    url: 'http://www.omdbapi.com/?t=Star+Wars&type=movie',
    type: 'GET'
  }).done(function(response){
      movie1 = response;
      console.log(movie1);
      $("#movie1").append(displayMovie(movie1));
      $(".extra").hide();
  });

  $.ajax({
    url: 'http://www.omdbapi.com/?t=Casablanca&type=movie',
    type: 'GET'
  }).done(function(response){
      movie2 = response;
      console.log(movie2);
      $("#movie2").append(displayMovie(movie2));
      $(".extra").hide();
  });

  $.ajax({
    url: 'http://www.omdbapi.com/?t=Black+Dynamite&type=movie',
    type: 'GET'
  }).done(function(response){
      movie3 = response;
      console.log(movie2);
      $("#movie3").append(displayMovie(movie3));
      $(".extra").hide();
  });



  $(document).on("click", ".movieContainer button",function(){
    // console.log($(this).parent().next());
    $(this).parent().next().slideToggle(200);
    $(this).toggleClass("more less rotate");
    $(".more").text("+");
    $(".less").text("-");
  });

  $("#search").on("click",function(){
    var searchTitle = $("#searchText").val();

    searchTitle.replace(/\s/g, '+');

    // for(var it=0; it < searchTitle.length; it++){
    //   if(searchTitle.charAt(it)===32){
    //     searchTitle.char
    //   }
    // }

    $.ajax({
      url: 'http://www.omdbapi.com/?t='+ searchTitle + '&type=movie',
      type: 'GET'
    }).done(function(response){
      var newMovie = response;
      $("#movie4").html(displayMovie(newMovie));
      $(".extra").hide();
    });
  });

  function displayMovie(movie){
    var poster = movie.Poster;
    var title = movie.Title;
    var released = movie.Released;
    var runtime = movie.Runtime;

    var actors = movie.Actors;
    var director = movie.Director;
    var plot = movie.Plot;

    return '<img class=\"poster img-responsive\" src=\"' + poster + '\" alt=\"' +
            title + ' poster\"/><p>Title: <span>' + title + '</span></p><p>Released: <span>' + released + '</span></p><p>Runtime: <span>' +
            runtime + '</span><button class=\"more btn btn-default text-center\">+</button></p><div class=\"extra\"><p>Actors: <span>' + actors + '</span></p><p>Director: <span>' +
            director + '</span></p><p>Plot: <span>' + plot + '</span></p></div>';
  }

});
