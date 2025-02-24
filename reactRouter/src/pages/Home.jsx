import { useState } from "react";

function Home(){
    const[number, setNumber] = useState(0);

    const sumar = () => {
        setNumber(number+1)
    }

    const restar = () => {
        setNumber(number-1)
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </div>
    );
}

export default Home;