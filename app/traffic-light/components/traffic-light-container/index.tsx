import Light from "../light";
import { lights } from "../../util";

const TrafficLightContainer = () => {
  return (
    <div className="w-48 h-96 bg-gray-800 rounded-lg flex flex-col items-center justify-around p-4">
        {lights.map((color) => (
            <Light key={color} color={color} />
        ))}
    </div>
  );
}

export default TrafficLightContainer;
