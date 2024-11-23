export default function ListData({para,val,unit}){
    return(
        <div className="h-1/12 w-full border-t flex justify-between px-2 py-1">
            <span>{para}</span>
            <span>{val}{unit}</span>
        </div>
    )   
}