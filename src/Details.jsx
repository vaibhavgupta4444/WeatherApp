import ListData from "./ListData"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Details({info,city,wind,country,visibility}){
    return(
        <div className="w-4/5 flex flex-wrap justify-self-center justify-center center mt-3 text-white" >
            <p className="mb-2">{city},{country}{info.humidity>85?<ThunderstormIcon/>:info.temp<20?<AcUnitIcon/>:<WbSunnyIcon/>}</p>
            <ListData para="Temperature" val={info.temp} unit={<>&deg;c</>}/>
            <ListData para="Humidity" val={info.humidity} unit="%"/>
            <ListData para="Pressure" val={info.pressure} unit="hPa"/>
            <ListData para="Feels Like" val={info.feels_like} unit={<>&deg;c</>}/>
            <ListData para="Wind Speed" val={wind.speed} unit={"m/s"}/>
            <ListData para="Visibility" val={visibility/1000} unit={"km"}/>
        </div>
    )
}