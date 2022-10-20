import React,{useState} from "react";

import Forget from "./Forget"
import Login from "./Login";
import Create from "./Create";
const Asign =()=>{
    const [reg,setReg]=useState(false);
    const [forg,setForg]=useState(false);
    const [log,setLog]=useState(true);
    return(


        <div>
               {!reg && !forg && log? (
          
                        <div>
                            <Login setReg={setReg} reg={reg} setForg={setForg} forg={forg} setLog={setLog} log={log}/>
                        </div>
                ) : null}
                                
                    {!log && !forg && reg? (
                        
                        <div>
                            <Create setReg={setReg} reg={reg} setForg={setForg} forg={forg} setLog={setLog} log={log}/>
                        </div>
                ) : null}


                                                
                    {!log && !reg && forg? (
                                            
                                            <div>
                                                <Forget setReg={setReg} reg={reg} setForg={setForg} forg={forg} setLog={setLog} log={log}/>
                                            </div>
                                    ) : null}

        </div>

    )
}

export default Asign;