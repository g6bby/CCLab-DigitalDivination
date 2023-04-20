var CLIENTID = "zYFO6EyLtFsprWQ5nZrh1wL7KHJNYPmgRlRGJCXsxI6RDwg7H2eL1V53ken8OwvC";
var CLIENTSECRET = "YqIfownJ_i9NOSHvMzswkuslMHUn2c8EWJRo910EnqkgUb1Gsm07-Vq3c2FNS0rd5kAnouBLngHqho9vreQiaw";
var accessToken= "?access_token=IpGIz8qv61T0FSAgtYXEsAPAkIFlqEJP5O_dNgZBeKM6Wdn6BgEpxKXs8u8ecsLJ";
var API = "https://api.genius.com/search";
var APISong = "https://api.genius.com/songs/";
var songID = "2471960";
var maxSong= 2471960;

//var button = select('#submit');
//button.mousePressed(newRandomSong);



//Max song is 489579 for a fairly safe number. But 2 million songs 

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//https://api.genius.com/search?q=Kendrick%20Lamar
var xhr = new XMLHttpRequest(); //XML HTTP Request
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 304) {
      // Success! Do stuff with data.
      //console.log(xhr.responseText); 
    }
  }
};
xhr.open("GET", APISong+songID+accessToken, false);
//xhr.open("GET", API+accessToken+ '&q=Kendrick%20Lamar', false);

xhr.send(); 
//console.log(xhr.status);
//console.log(xhr.statusText);
demo=xhr.response;

var json = JSON.parse(demo);
var song = json['response']['song'];


function newRandomSong() {
  songID =getRandomInt(1,maxSong);
  randomSong();
}

function randomSong(){
  document.getElementById("form").addEventListener("submit", function(event) {
    // Prevent form submission
  })
    event.preventDefault();
  var check = document.getElementById("choice").value;
  var check2 = document.getElementById("choice").value;

      //var val1 = "angry";
      //check will be true or false
      if (check === "angry")
      { 

        songID = "466995"
      }
      else if (check2 === "happy"){


        songID = "57158";
      }

  xhr.open("GET", APISong+songID+accessToken, false);
  xhr.send(); 
  demo=xhr.response;
  
  while (xhr.status===404){ //Checks if the Random Song Exists
      songID =getRandomInt(1,maxSong);
      xhr.open("GET", APISong+songID+accessToken, false);
      xhr.send(); 
      demo=xhr.response;
  }
  
  json = JSON.parse(demo);
  song = json['response']['song'];
  document.getElementById("songImage").innerHTML = "<img src=\""+song['song_art_image_url']+"\"alt=\"Some Awesome Album Art\" style=\"width:200px;height:200px;\">";
  // I made these pixel values since I'd rather have overlap on a small screen than the image scaled too small 
 

//document.getElementById("song").innerHTML = "SONG: <a href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
document.getElementById("song").innerHTML = "SONG: <a target=\"_blank\" href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
  
document.getElementById("artist").innerHTML = "ARTIST: <a target=\"_blank\"  href="+song['primary_artist']['url']+">"+song['primary_artist']['name'].toUpperCase()+"</a>";
document.getElementById("releaseDate").innerHTML = "RELEASE DATE: "+song['release_date'];
}
function tweetSong(){
  window.open('https://twitter.com/intent/tweet?hashtags=songs&text=Found a cool song today. "'+song['title']+'" by '+song['primary_artist']['name']);

}


//specific songs
function checkInput(){
      var check = document.getElementById("choice").textContent = "angry";
      //var val1 = "angry";
      //check will be true or false
      if (check)
      { 
        songID = "466995"
      }
      if (!check){
        songID = "466996";
      }
    }

//GETTING STARTED // 
$(document).ready(function() {
  randomSong(); //Using this instead of newRandomSong, because I want to start with the same song every time 
});