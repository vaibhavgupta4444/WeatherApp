import Icon from "./Icon"
import Search from './searchBar'
import Details from "./Details"

export default function Features({info,updateInfo,setDisplay}){
    return(
        <div className="w-full sm:w-2/5 opacity-70 bg-black h-full">
            <Icon info={info.description} humidity={info.main.humidity} temp={info.temperature}/>
            <Search updateInfo={updateInfo} setDisplay={setDisplay}/>
            <Details info={info.main} city={info.city} country={info.country} visibility={info.visibility} wind={info.wind}/>
        </div>
    )
}