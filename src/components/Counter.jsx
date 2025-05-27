import { useSelector } from "react-redux"
import { increment,decrement,incrByAmount,decrByAmount } from "../state/counterSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


export default function Counter(){
    const [value,setValue] = useState("");
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()

    const addCount = () => {
        dispatch(increment())
    }

    const getCount = () => {
        dispatch(decrement())
    }

    const incrAmount = (amount) => {
        dispatch(incrByAmount(amount))
    }

    const decrAmount = (amount) => {
        dispatch(decrByAmount(amount))
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }


    return (
        <>
        <div>
            <h1>Counter</h1>
            <p style={{padding:"20px",border:"2px solid black",borderRadius:"10px",margin:"20px",fontSize:"30px"}}>{count}</p>
            <button onClick={() => addCount()}>+</button>
            <button onClick={() => getCount()}>-</button>
        </div>
        <p>-------------------------------------------------------------------------</p>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h1>Counter 2</h1>
            <p style={{padding:"20px",border:"2px solid black",borderRadius:"10px",margin:"20px",fontSize:"30px"}}>{count}</p>

            <input type="number" value={value} onChange={handleChange} style={{width:"400px", padding:"20px",border:"2px silid gray",borderRadius:"10px",background:"whitesmoke", outline:"none",fontSize:"30px"}} />
            <div style={{margin:"20px",display:"flex",justifyContent:"center"}}>
            <button onClick={() => incrAmount(+value)}>+</button>
            <button onClick={() => decrAmount(+value)}>-</button>
            </div>
           
        </div>
        </>
    )
}