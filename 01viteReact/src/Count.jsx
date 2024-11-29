// Create a function

import { useState } from "react"


// state variable and method


function Count(){
    const [count, setCount] = useState(0);
    return(
        <>
            <h3>Button was pressed {count}  times already.</h3>
            <button onClick={ () => setCount( (count) =>count+1 ) }>Count: {count} </button>
            <p>Current Count: {count} </p>
        </>
        
    )
}

export default Count;