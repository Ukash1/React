import React,{useState} from "react";
export default function TwoDynamic()
{
    const[name,setName]=useState("")
    const changeName=(event)=>setName(event.target.value)
    return(
        <div>
            Two Way Binding
            <input onChange={changeName} value={name}></input>
            <p>The Name is {name}</p>
        </div>
    )
}