import InputBase from '@mui/material/InputBase';
import { colors, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css';
import { useState } from 'react';
import getWeatherUpdate from './apiFetch.js'

const api_key=import.meta.env.VITE_API_KEY;

export default function search({updateInfo,setDisplay}){
    let [search,setSearch]=useState("");

    let handleInputChange=(event)=>{
        setSearch(event.target.value);
    }

    let handleForm=async (event)=>{
        setDisplay(true);
        event.preventDefault();
        setSearch("");
        let data=await getWeatherUpdate(search,api_key);
        updateInfo(data);
    }

    return(
        <div className="mt-2">
            <form onSubmit={handleForm} className='flex justify-center'>
                <InputBase sx={{borderBottom:"1px solid white",paddingLeft:"0.25rem",width:"60%"}} id="standard-basic" placeholder="Search City" variant="standard" value={search} onChange={handleInputChange} name="search"/>
                <IconButton sx={{marginLeft:"0.5rem"}} size='small' id="btn" type="submit"><SearchIcon/></IconButton>
            </form>
        </div>    
    )
}