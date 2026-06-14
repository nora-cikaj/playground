'use client';

import { useState } from "react";
import TrafficLightContainer from "./components/traffic-light-container";

const TrafficLight = () => {
    const [isTrafficLightPaused, setIsTrafficLightPaused] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center justify-around h-screen">
            <h1 className="text-6xl font-bold text-center">
                Traffic Light
            </h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setIsTrafficLightPaused(prev => !prev)}>
                {isTrafficLightPaused ? "Resume" : "Pause"}
            </button>
            <TrafficLightContainer isTrafficLightPaused={isTrafficLightPaused}/>
        </div>
    );
}

export default TrafficLight;
