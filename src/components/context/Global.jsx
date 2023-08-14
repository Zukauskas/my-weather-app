/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
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

    useEffect(() => {
        const storedMarkers = sessionStorage.getItem("markers");
        const storedStartDate = sessionStorage.getItem("startDate");
        const storedEndDate = sessionStorage.getItem("endDate");
        const storedWeatherVariables =
            sessionStorage.getItem("weatherVariables");
        const storedWeatherData = sessionStorage.getItem("weatherData");
        if (storedMarkers) {
            setMarkers(JSON.parse(storedMarkers));
        }

        if (storedStartDate && storedEndDate) {
            setStartDate(storedStartDate);
            setEndDate(storedEndDate);
        }

        if (storedWeatherVariables) {
            setWeatherVariables(JSON.parse(storedWeatherVariables));
        }

        if (storedWeatherData) {
            setWeatherData(JSON.parse(storedWeatherData));
        }
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = await getWeatherData(
            startDate,
            endDate,
            weatherVariables,
            markers
        );
        setWeatherData(data);

        sessionStorage.setItem("startDate", startDate);
        sessionStorage.setItem("endDate", endDate);
        sessionStorage.setItem(
            "weatherVariables",
            JSON.stringify(weatherVariables)
        );
        sessionStorage.setItem("weatherData", JSON.stringify(data));
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
