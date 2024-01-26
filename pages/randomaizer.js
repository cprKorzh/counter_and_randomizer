import { useState } from "react";
import Navbar from "../components/navbar.js"
import { $minVal, $maxVal, $randomVal, randomizeNumber, minValPlace, maxValPlace } from "../state-manager/randomizer.ts";
import { useUnit } from "effector-react";

const Randomaizer = () => {
    /* const [minVal, setMinValue] = useState(0);
    const [maxVal, setMaxValue] = useState(10);
    const [randomVal, setRandomValue] = useState(0);

    const handleRnadomNum = () => {
        setRandomValue(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
    }; */

    const { random, minimum, maximum, setRandom, setMin, setMax } = useUnit({
        random: $randomVal,
        minimum: $minVal,
        maximum: $maxVal,
        setRandom: randomizeNumber,
        setMin: minValPlace,
        setMax: maxValPlace,
    });

    return (
        <div>
            <Navbar/>
            <div className="containerBox">
                <h1>Рандомайзер</h1>
            </div>
            <div className="containerBox">
                <div className="randomize">
                    <div className="randomNum">
                        <p>
                            Случайное число
                        </p>
                        <p>
                            {random}
                        </p>
                    </div>
                    <div className="inputs">
                        <p>
                            Начало интервала
                        </p>
                        <input 
                            type="number" 
                            value={minimum} 
                            onChange={(e) => setMin(+e.target.value)}
                        />
                        <p>
                            Конец интервала
                        </p>
                        <input 
                            type="number" 
                            value={maximum} 
                            onChange={(e) => setMax(+e.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={setRandom}>
                            Вычислить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Randomaizer;