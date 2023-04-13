let btn = document.querySelector('button')
let city; 

const api_key = "1bbb153dea7974689b46fceeadc9bff5"


var choice = document.getElementById("choice");
choice.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});


btn.addEventListener('click', ()=> {
    let form = document.getElementById("form")
    city = form.elements[0].value
    getWeather(city); 

    async function getWeather(city) {
    let api_url = "https://api.openweathermap.org/data/2.5/weather?q=" +city+"&appid=" + api_key+"&units=imperial";
    
      // Making an API call (request)
      // and getting the response back
      const response = await fetch(api_url);
    
      // Parsing it to JSON format
      const data = await response.json();
      
      console.log(data)
      console.log(data.main.temp);
      let temp = data.main.temp

      if( temp <= 60){
            emoji = "❄️"
        } 
     else {
         emoji = "☀️"
    }
      document.getElementById("result").textContent = "The temperature in " + city + " right now is " + temp + " " + emoji
    }    

})