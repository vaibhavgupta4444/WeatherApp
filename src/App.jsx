import { useEffect, useState } from 'react'
import './App.css'
import Features from './Features'
import Static from './Static'
import Error from './Error'

function App() {
  let [displayLoader,setDisplay]=useState(true);
  let [failed,setFetch]=useState(false);
  let [info,setInfo]=useState({
    city:"",
    temperature:"",
    country:"",
    description:"",
    visibility:"",
    main:{},
    wind:{}
  });

  let updateInfo=(newInfo)=>{
    if(!newInfo){
      setFetch(true);
    }else{
      setInfo((previousData) => {
        return {...previousData,...newInfo}
      } );
    }
  setDisplay(false);
  }

  useEffect(()=>{
    async function getData(){
      const api_key=import.meta.env.VITE_API_KEY;
      navigator.geolocation.getCurrentPosition(async (position)=>{
        let lat=position.coords.latitude;
        let lon=position.coords.longitude;
        let result=await getInitData(lat,lon);
        let info={
          city:result.name,
          temperature:result.main.temp,
          country:result.sys.country,
          description:result.weather[0].main,
          main:result.main,
          wind:result.wind,
          visibility:result.visibility
        }
        setInfo({...info}); 
        setDisplay(false);
      });

      let getInitData=async(lat,lon)=>{
        try{
          let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&appid=${api_key}`);
          let result=await response.json();
          if(result.cod==400){
            throw err;
          }else{
            return result;
          }
        }catch(err){
          let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${api_key}&units=metric`);
          let result=await response.json();
          setFetch(true);
          return result;
        } 
      }
    }
    getData()  
  },[]);
    return(
    <>
      {failed&&<div className='sm:flex sm:justify-center sm:items-center bg-red-500 opacity-80 w-full lg:w-1/2 mb-2 rounded'><Error setFetch={setFetch}/>
      </div>}
      <div className='xl:w-6/12 lg:w-4/5 lg:h-4/5 w-full h-full sm:flex sm:justify-self-center'>
      {
        displayLoader?<div className='w-full h-full bg-black opacity-70 flex flex-col justify-center items-center flex-wrap'>
          <img className='h-1/5 lg:h-2/5' src='/icon/WeatherIcons.gif'/>
          <p className='w-full text-white flex justify-center text-xl'>Delecting Your Location</p>
          <p className='w-1/2 text-center text-white flex justify-center text-sm'>Your current location will be displayed 
            on the App & used for calculating Real time weather
          </p>
          </div>:
        <>
          <Static location={info.city} countryCode={info.country} temperature={info.temperature} description={info.description} />
          <Features info={info} updateInfo={updateInfo} setDisplay={setDisplay}/>
        </>
      } 
      </div>
    </>
  )
}

export default App
