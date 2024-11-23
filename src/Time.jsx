import { useEffect, useState } from "react"

export default function Time(){
    let [time,setTime]=useState("20:20:01");
    
    useEffect(()=>{
        setInterval(()=>{
            let d=new Date();
            let h=d.getHours();
            let m=d.getMinutes();
            let s=d.getSeconds();
            setTime(`${h}:${m}:${s}`);
        },1000);
    },[]);

    return(
        <p>{time}</p>
    )
}