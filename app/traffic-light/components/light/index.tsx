import { LightColor } from "../../types";
import { lightStyles } from "../../constants";

interface LightProps {
  color: LightColor;
}

const light: React.FC<LightProps> = ({ color }) => {
  return (
    <div className={`w-26 h-26 ${lightStyles[color]} rounded-full`} >
    </div>
  );
}

export default light;
