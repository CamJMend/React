import { useState } from "react";
import Text from '../components/text'

function About(){
    const[show, setShow]=useState(true);

    function handleShow(){
        setShow(!show)
    }
    return (
        <div>
            <h1>About</h1>
            <button onClick={handleShow}>Mostrar / Ocultar</button>
            {show && <Text />}
        </div>
    );
}

export default About;