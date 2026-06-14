'use client';

import { RefObject, useEffect, useState } from "react";
import Light from "../light";
import { lights } from "../../util";
import { lightDurations } from "../../constants";

interface Props {
  isTrafficLightPaused: boolean;
}

const TrafficLightContainer: React.FC<Props> = ({ isTrafficLightPaused }) => {
  const [activeLightIndex, setActiveLightIndex] = useState<number>(0);

  useEffect(() => {  
    if (isTrafficLightPaused) {
      return;
    }

    const nextLightIndex = (activeLightIndex - 1 + lights.length) % lights.length; // Lights will light up in reverse order
    const duration = lightDurations[lights[activeLightIndex]];

    const timer = setTimeout(() => {
      setActiveLightIndex(nextLightIndex);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [activeLightIndex, isTrafficLightPaused]);

  return (
    <div className="w-48 h-96 bg-gray-800 rounded-3xl flex flex-col items-center justify-around p-4">
        {lights.map((color, index) => (
            <Light key={color} color={color} isActive={index === activeLightIndex} />
        ))}
    </div>
  );
}

export default TrafficLightContainer;
