$(function() {
  var apiKey = 'a460b122b56d6a8774c447d1b123a4b1';
  var url = 'https://api.forecast.io/forecast/';
  var lati = 37.8267;
  var longi = -122.423;
  // var data;
  // var morning = { temp: "", weather: ""};
  // var afternoon = { temp: "", weather: ""};
  // var evening = { temp: "", weather: ""};

  $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
   $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
  });

    var dateObj = new Date();
    var day = dateObj.getDate()+1;  // date starts from 0 (as does month)
    (day < 10) ? day = "0"+day : day=day; // add 0 to front of day because day has to be two digits
    var date = dateObj.getFullYear()+"-"+ (dateObj.getMonth()+1) + "-" + day;

// MORNING
if ($('.active').attr('data-slide-to') == 0) {
  $.getJSON(url + apiKey + "/" + lati + "," + longi + "," + date + "T08:00:00" + '?callback=?', function(data) {
      $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
      console.log("8am: " + data.currently.temperature);

});
}

// AFTERNOON
if ($('.active').attr('data-slide-to') == 1) {
  $.getJSON(url + apiKey + "/" + lati + "," + longi + "," + date + "T13:00:00" + '?callback=?', function(data) {
    $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
      console.log("1pm: " + data.currently.temperature);
  });
}

// EVENING
if ($('.active').attr('data-slide-to') == 2) {
  $.getJSON(url + apiKey + "/" + lati + "," + longi + "," + date + "T18:00:00" + '?callback=?', function(data) {
    $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
      console.log("6pm: " + data.currently.temperature);
  });
}


});
