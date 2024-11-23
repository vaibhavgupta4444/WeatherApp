export default async function getWeatherUpdate(city,api_key){
  try{
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
    let result=await response.json();
    if(result.cod==400){
      return result;
    }else{
      let newData={
        city:result.name,
        temperature:result.main.temp,
        country:result.sys.country,
        main:result.main,
        wind:result.wind,
        description:result.weather[0].main,
        visibility:result.visibility,
      }
    return newData;
    }
  }catch(err){
    console.log("Location not found");
  }  
}