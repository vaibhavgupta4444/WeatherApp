import {WbSunny,Thunderstorm,Cloud,AcUnit} from '@mui/icons-material';

export default function Icon({info,humidity,temp}){
    return(
        <div className="h-1/3 w-4/5 text-white border-b-2 flex flex-wrap justify-self-center text-3xl">
            <p className='w-full text-center flex flex-col justify-center items-center'>{info=="cloud"?
                <Cloud sx={{fontSize:'5rem'}}/>:humidity>85?<Thunderstorm sx={{fontSize:'5rem'}}/>:temp<20?<AcUnit sx={{fontSize:'5rem'}}/>:<WbSunny sx={{fontSize:'5rem'}}/>}</p>
            <p className='w-full text-center'>{info}</p>
        </div>
    )
}