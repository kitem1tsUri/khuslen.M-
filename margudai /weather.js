let aaav = document.getElementById('inputt');
aaav.addEventListener('keydown', (el) => { 
  if (el.key== "Enter") { 
    getData(aaav.value)
    
  }
})
const getData = async (city) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0a9b1d70e2d449a7fcadd8c7ceaaade5`
    );
    const info = await data.json();
    document.getElementById('number').innerHTML = Math.floor(info.main.temp)+"°";
    document.getElementById('city').innerHTML = info.name;
    document.getElementById('outside').innerHTML = info.weather[0].main;
    console.log(info); scrollBy 
    console.log(info.weather[0].main)
 
switch (info.weather[0].main) {
  case "Clear":
    console.log('clear')
   document.getElementById('icon').src="./icons/Sun.png"
  break; 
  case "Clouds":
    console.log('clouds')
   document.getElementById('icon').src="./icons/Clouds.png"
  break; 
  case "Rain": 
  console.log('Rain')
   document.getElementById('icon').src="./icons/Rain.png"  
  break;
  case "Snow": 
  console.log('Rain')
   document.getElementById('icon').src="./icons/Snow.png"  
  break;
  
    

} };

  // getData("ulaanbaatar");
// 
