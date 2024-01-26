import { useState } from "react";
import Navbar from "../components/navbar.js"
import { $counter, counterPlus, counterMinus } from "../state-manager/counter.ts";
import { useUnit } from 'effector-react';

const Counter = () => {
    /* const [count, setCount] = useState(0);

    function countPlus() {
        setCount(count + 1)
    }

    function countMinus() {
        setCount(count - 1)
    } */

    const { number, setPlus, setMinus } = useUnit({
        number: $counter,
        setPlus: counterPlus,
        setMinus: counterMinus
    });

    return (
        <div>
            <Navbar/>
            <div className="containerBox">
                <h1>Счетчик</h1>
            </div>
            <div className="containerBox">
                <div className="counterBox">
                    <div className="counter">
                        <p>{number}</p>
                    </div>
                    <div className="buttons">
                        <button onClick={setMinus}>-</button>
                        <button onClick={setPlus}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;