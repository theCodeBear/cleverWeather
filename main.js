$(function() {
  var apiKey = 'a460b122b56d6a8774c447d1b123a4b1';
  var url = 'https://api.forecast.io/forecast/';
  var lati = 37.8267;
  var longi = -122.423;
  // var data;
  // var morning = { temp: "", weather: ""};
  // var afternoon = { temp: "", weather: ""};
  // var evening = { temp: "", weather: ""};

  // $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
  //  $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
  // });

    var dateObj = new Date();
    var day = dateObj.getDate()+1;  // date starts from 0 (as does month)
    (day < 10) ? day = "0"+day : day=day; // add 0 to front of day because day has to be two digits
    var date = dateObj.getFullYear()+"-"+ (dateObj.getMonth()+1) + "-" + day;

// var slide = 0;


// if ($('a').click(function() {
// // MORNING
//   var time = "";
//   (++slide == 4) ? slide=0 : slide=slide;
//   if (slide=0)
//     time = "T08:00:00";
//   else if (slide=1)
//     time = "T13:00:00";
//   else if (slide=2)
//     time = "T18:00:00";

  $.getJSON(url + apiKey + "/" + lati + "," + longi + "," + date + "T08:00:00" + '?callback=?', function(data) {
      var clouds = data.currently.cloudCover;
      var weatherImg = "";
      if (clouds < 0.3)
        weatherImg = "";
      $('#slide0').html('<h1 class="cover-heading temp-num" >' + Math.round(data.currently.temperature) + ' &#xb0<span class="subscript"> f</span></h1>' +
                    '<i class="fa fa-cloud fa-5x cloudy animated swing"></i>' +
                    '<p class="lead">Cloudy with a chance of meatballs</p>' +
                    '<p class="lead">' +
                    ' You should probably wear<br /><img src="img/t-shirt.png" class="icon">' +
                    '</p>' +
                    '8:00am');

      console.log("8am: " + data.currently.temperature + "\n" + data.currently.precipProbability + "\n" + data.currently.cloudCover);
  });
// }));

// AFTERNOON
// if ($('.active').attr('data-slide') == 1) {
  $.getJSON(url + apiKey + "/" + lati + "," + longi + "," + date + "T13:00:00" + '?callback=?', function(data) {
    $('#slide1').html('<h1 class="cover-heading temp-num">' + Math.round(data.currently.temperature) + ' &#xb0<span class="subscript"> f</span></h1>' +
                  '<i class="fa fa-cloud fa-5x cloudy animated swing"></i>' +
                    '<p class="lead">Cloudy with a chance of meatballs</p>' +
                    '<p class="lead">' +
                    ' You should probably wear<br /><img src="img/t-shirt.png" class="icon">' +
                    '</p>' +
                    '1:00pm');
                    
      console.log("1pm: " + data.currently.temperature + "\n" + data.currently.precipProbability + "\n" + data.currently.cloudCover);
  });
// }

// EVENING
// if ($('.active').attr('data-slide') == 2) {
  $.getJSON(url + apiKey + "/" + lati + "," + longi + "," + date + "T18:00:00" + '?callback=?', function(data) {
    $('#slide2').html('<h1 class="cover-heading temp-num">' + Math.round(data.currently.temperature) + ' &#xb0<span class="subscript"> f</span></h1>' +
                    '<i class="fa fa-cloud fa-5x cloudy animated swing"></i>' +
                    '<p class="lead">Cloudy with a chance of meatballs</p>' +
                    '<p class="lead">' +
                    ' You should probably wear<br /><img src="img/t-shirt.png" class="icon">' +
                    '</p>' +
                    '6:00pm');
      console.log("6pm: " + data.currently.temperature + "\n" + data.currently.precipProbability + "\n" + data.currently.cloudCover);
  });
// }


});
