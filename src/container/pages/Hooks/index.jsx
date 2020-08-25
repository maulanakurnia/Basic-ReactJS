import React, { useState } from 'react';
import './Hooks.css';

const Hook = () => {
    const [count, setCount] = useState(0);
    return(
        <div className="p-hooks">
            <p>Nilai Saat ini adalah : {count}</p>
            <button onClick={()=> setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}
export default Hook;