var CLIENTID = "zYFO6EyLtFsprWQ5nZrh1wL7KHJNYPmgRlRGJCXsxI6RDwg7H2eL1V53ken8OwvC";
var CLIENTSECRET = "YqIfownJ_i9NOSHvMzswkuslMHUn2c8EWJRo910EnqkgUb1Gsm07-Vq3c2FNS0rd5kAnouBLngHqho9vreQiaw";
var accessToken= "?access_token=IpGIz8qv61T0FSAgtYXEsAPAkIFlqEJP5O_dNgZBeKM6Wdn6BgEpxKXs8u8ecsLJ";
var API = "https://api.genius.com/search";
var APISong = "https://api.genius.com/songs/";
var songID = "2471960";
var maxSong= 2471960;

const angrySongs = ["466995", "5059654", "6114523", "135062"];
const happySongs = ["57158", "90487", "5281715", "6578371"];
const sadSongs = ["4186978", "382949", "3539284", "4334221", "506752", "2900257"];
const calmSongs = ["69336", "4631315", "7008965"];
const excitedSongs = ["62170", "90475", "193691", "134525", "1850"];
const desperateSongs = ["5208409", "135016", "75171"];
const regretSongs = ["8965212", "2236", "452"];
const rebelSongs = ["49011", "8616823", "1806", "66719"];
const groovySongs = ["30290", "30280", "3343", "16676"];
const nostalgicSongs = ["725791", "5863030", "3295634", "75"];
const revengeSongs = ["102297", "198963", "5212746"];
const etherealSongs = ["3326970", "4902007", "6033804", "3328515"]; 
const loveSongs = ["6518316", "5715", "58043", "4826645"];

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

      //var val1 = "angry";
      //check will be true or false
      if (check === "angry" || check === "mad")
      { 

        songID = `${angrySongs[Math.floor(Math.random() * angrySongs.length)]}`;
      }
      else if (check === "happy")
      {


        songID = `${happySongs[Math.floor(Math.random() * happySongs.length)]}`;
      }
      if (check === "sad")
      {

        songID = `${sadSongs[Math.floor(Math.random() * sadSongs.length)]}`;
      }
      if (check === "calm")
      {

        songID = `${calmSongs[Math.floor(Math.random() * calmSongs.length)]}`;
      }
      if (check === "excited")
      {

        songID = `${excitedSongs[Math.floor(Math.random() * excitedSongs.length)]}`;
      }
      if (check === "desperate")
      {

        songID = `${desperateSongs[Math.floor(Math.random() * desperateSongs.length)]}`;
      }
      if (check === "regretful"){

        songID = `${regretSongs[Math.floor(Math.random() * regretSongs.length)]}`;
      }
      if (check === "rebel")
      {

        songID = `${rebelSongs[Math.floor(Math.random() * rebelSongs.length)]}`;
      }
      if (check === "groovy")
      {

        songID = `${groovySongs[Math.floor(Math.random() * groovySongs.length)]}`;
      }

      if(check === "nostalgic")
      {

        songID = `${nostalgicSongs[Math.floor(Math.random() * nostalgicSongs.length)]}`;
      }
      if(check === "revenge"){

        songID = `${revengeSongs[Math.floor(Math.random() * revengeSongs.length)]}`;
      }
      if(check === "ethereal")
      {

        songID = `${etherealSongs[Math.floor(Math.random() * etherealSongs.length)]}`;

      }
      if(check === "lovestruck")
      {

        songID = `${loveSongs[Math.floor(Math.random() * loveSongs.length)]}`;
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
  document.getElementById("songImage").innerHTML = "<img src=\""+song['song_art_image_url']+"\"alt=\"Some Awesome Album Art\" style=\"width:300px;height:300px;\">";
  // I made these pixel values since I'd rather have overlap on a small screen than the image scaled too small 
 

//document.getElementById("song").innerHTML = "SONG: <a href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
document.getElementById("song").innerHTML = "SONG: <a target=\"_blank\" href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
  
document.getElementById("artist").innerHTML = "ARTIST: <a target=\"_blank\"  href="+song['primary_artist']['url']+">"+song['primary_artist']['name'].toUpperCase()+"</a>";
document.getElementById("releaseDate").innerHTML = "RELEASE DATE: "+song['release_date'];
}
function tweetSong(){
  window.open('https://twitter.com/intent/tweet?hashtags=songs&text=Found a cool song today. "'+song['title']+'" by '+song['primary_artist']['name']);

}


//GETTING STARTED // 
$(document).ready(function() {
  randomSong(); //Using this instead of newRandomSong, because I want to start with the same song every time 
});