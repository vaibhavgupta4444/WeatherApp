import DateTag from "./Date"
import Time from "./Time"

export default function Static({location,countryCode,temperature}){
    return(
        <div className="w-full sm:w-3/5 h-full bg-[url('assets/images/summer.jpg')] text-3xl text-600 text-white bg-cover flex flex-col justify-between">
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