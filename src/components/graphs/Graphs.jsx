import { useContext } from "react";
import { Global } from "../context/Global.jsx";

const Graphs = () => {
    const { weatherData } = useContext(Global);
    if (!weatherData) {
        return <div>Loading...</div>;
    }
    return <div>{console.log(weatherData)}</div>;
};

export default Graphs;
