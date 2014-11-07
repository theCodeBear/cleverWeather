function b(){
  var apiKey = 'a460b122b56d6a8774c447d1b123a4b1';
  var url = 'https://api.forecast.io/forecast/';
  var lati = 37.8267;
  var longi = -122.423;
  var data;
  var morning = { temp: "", weather: ""};
  var afternoon = { temp: "", weather: ""};
  var evening = { temp: "", weather: ""};

  $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
    //console.log(data);
  //  console.log(new Date());
   $('#weather').html('and the temperature is: ' + data.currently.temperature);
  });

    var dateObj = new Date();
    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate()+1;
    (day < 10) ? day = "0"+day : day=day;
    var year = dateObj.getFullYear();
    var time = year+"-"+month+"-"+day+"T08:00:00";

$.getJSON(url + apiKey + "/" + lati + "," + longi + "," + time + '?callback=?', function(data) {
    alert("yo");
    console.log("8am: " + data.currently.temperature);
});




}
