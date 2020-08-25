import React, { useState, useEffect } from 'react';
import './Hooks.css';

const Hook = () => {
    const [count, setCount] = useState(0);

    // useEffect memiliki kemampuan ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount
    useEffect(() => {
        document.title = `Title Change ${count}`
        return () => { // dan jika di dalam useEffect terdapat return maka, useEffect akan memanggil lifeCycle ComponentWillUnmount
            document.title = `ReactJS Hello World!`
        }
    })

    return(
        <div className="p-hooks">
            <p>Nilai Saat ini adalah : {count}</p>
            <button onClick={()=> setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}
export default Hook;