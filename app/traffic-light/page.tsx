import TrafficLightContainer from "./components/traffic-light-container";

const TrafficLight = () => {
    return (
        <div className="flex flex-col items-center justify-around h-screen">
            <h1 className="text-6xl font-bold text-center">
                Traffic Light
            </h1>
            <TrafficLightContainer />
        </div>
    );
}

export default TrafficLight;
