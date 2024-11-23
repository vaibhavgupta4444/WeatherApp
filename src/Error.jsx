export default function Error({setFetch}){
    setTimeout(()=>{
        setFetch(false);
    },3000);
    return(
      <>
      <p className="err text-white p-1">Failed to fetch weather at your location. Try to search your location</p>
      </>
    )
}