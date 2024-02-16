import React from "react"

import { Counter } from "./Counter"

export function Clicker() {
    const [addComponent, setAddComponent] = React.useState(false);
    const [opacity, setOpacity] = React.useState("opacity-0");


    const changeElements = () => {
        setAddComponent(true);
        setTimeout(() => setOpacity("opacity-100 transition-opacity duration-700 ease-in-out"), 10);
    };

    return (
        <div className="font-sans flex flex-col h-screen items-center mt-36">
            <h1 className="text-2xl font-bold mb-2">
                Cuantos dias faltan para el dia F?
            </h1>
            {addComponent && <div className={`${opacity}`}><Counter /></div>}
            
            <button onClick={changeElements} className="mt-3 w-28 bg-indigo-500 text-white font-bold px-4 py-1 text-lg rounded-lg hover:bg-indigo-600">
                Calcular
            </button>
        </div>
    )
}