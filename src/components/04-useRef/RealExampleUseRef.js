import React, { useState } from 'react'
import { MultipleCustomHokks } from '../03-examples/MultipleCustomHokks'

import '../02-useEffect/effects.css'

export const RealExampleUseRef = () => {
   
    const [show, setShow] = useState(false); 

    return (
        <div>
            <h1>RealExampleUseRef</h1>
            <hr/>

            {show && <MultipleCustomHokks />}
        
            <button className="btn btn-outline-primary mt-5" onClick={()=> setShow(!show)} >Show/Hidde</button>

        </div>
    )
}
