import { LightColor } from "../../types";
import { lightStyles } from "../../constants";

interface LightProps {
  color: LightColor;
  isActive?: boolean;
}

const light: React.FC<LightProps> = ({ color, isActive }) => {
  const backgroundColor = isActive ? lightStyles[color] : "bg-gray-900";
  
  return (
    <div className={`w-26 h-26 ${backgroundColor} rounded-full`} >
    </div>
  );
}

export default light;
