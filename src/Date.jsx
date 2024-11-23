import { useEffect, useState } from "react";
export default function DateTag(){
    let [date,setDate]=useState("dsodj");

    useEffect(()=>{
        function getDate(){
        let d=new Date();
        let dat=d.getDate();
        let month=d.toLocaleString('default', { month: 'long' });
        let year=d.getFullYear();
        let dayName = d.toLocaleString('default', { weekday: 'long' });
        setDate(`${dayName} ${dat} ${month} ${year}`);
        }
        getDate()
    },[]);

    return(
        <p className="text-base">{date}</p>
    )
}