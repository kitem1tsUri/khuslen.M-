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
    document.getElementsByClassName('city').innerHTML = "1";
    console.log(info); scrollBy
  };
  
  // getData("ulaanbaatar");
// s
