/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getWeatherData } from "../../utils/getWeatherData.js";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [weatherVariables, setWeatherVariables] = useState({});
    let [weatherData, setWeatherData] = useState(null);
    const [markers, setMarkers] = useState([]);

    const weatherVariablesHandler = (e) => {
        const collection = e.target.selectedOptions;
        let values = {};
        for (let i = 0; i < collection.length; i++) {
            values[i] = collection[i].value;
        }
        setWeatherVariables(values);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = await getWeatherData(
            startDate,
            endDate,
            weatherVariables,
            markers
        );
        setWeatherData(data);
    };

    return (
        <Global.Provider
            value={{
                setStartDate,
                startDate,
                setEndDate,
                endDate,
                weatherVariablesHandler,
                weatherVariables,
                submitHandler,
                weatherData,
                markers,
                setMarkers,
            }}>
            {children}
        </Global.Provider>
    );
};
