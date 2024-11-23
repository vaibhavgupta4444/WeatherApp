import DateTag from "./Date"
import Time from "./Time"

export default function Static({location,countryCode,temperature,description}){
    let urlImg;
    switch (description) {
        case "Clear":
            urlImg="bg-[url('assets/images/summer.jpg')]";
            break;
        case "Clouds":
            urlImg="bg-[url('assets/images/cloud.jpg')]";
            break;  
        case "Rain":
            urlImg="bg-[url('assets/images/rain.jpg')]";
            break; 
        case "Drizzle":
            urlImg="bg-[url('assets/images/rain.jpg')]";
            break;
        case "ThunderStrom":
            urlImg="bg-[url('assets/images/thumderstrom.jpg')]";
            break;
        default:
            urlImg="bg-[url('assets/images/winter.jpg')]";
            break;
    }
    return(
        <div className={`w-full sm:w-3/5 h-full ${urlImg} text-3xl text-600 text-white bg-cover flex flex-col justify-between`}>
            <div className="w-full h-1/5 p-4 text-end">
                    <p>{location}</p>
                    <p>{countryCode}</p>
            </div>
            <div className="w-full h-1/6 py-2 flex justify-evenly">
                    <div className="w-7/12 ps-4 text-2xl">
                        <Time/>
                        <DateTag/>
                    </div>
                    <div className="w-2/5 text-6xl">
                        <p>{Math.floor(temperature)}&deg;c</p>
                    </div>
            </div>
        </div>
    )
}