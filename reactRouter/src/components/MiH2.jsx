import { useState } from "react"

function MiH2() {
    const[text]=useState("")

    const handleText = (evento) => {
        console.log("Hola Mundo")
    }

    return(
        <div>
            <input type="text" onChange={handleText} />
            <p>{text}</p>
        </div>
    )
}

export default MiH2;