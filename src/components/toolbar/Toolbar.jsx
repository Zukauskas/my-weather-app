import { useContext, useState } from "react";
import { Global } from "../context/Global.jsx";
import "./Toolbar.css";

const Toolbar = () => {
    const {
        submitHandler,
        setStartDate,
        startDate,
        setEndDate,
        endDate,
        weatherVariablesHandler,
    } = useContext(Global);

    const [isToolbarVisible, setIsToolbarVisible] = useState(false);

    const toggleToolbarVisibility = () => {
        setIsToolbarVisible(!isToolbarVisible);
    };

    const variablesList = [
        { value: "temperature_2m", name: "Temperature" },
        { value: "precipitation", name: "Precipitation" },
        { value: "windspeed_10m", name: "Wind speed" },
        { value: "relativehumidity_2m", name: "Humidity" },
        { value: "dewpoint_2m", name: "Dew Point" },
    ];

    return (
        <div className="toolbar-container">
            <button className="toggle-button" onClick={toggleToolbarVisibility}>
                Toggle Toolbar
            </button>

            {isToolbarVisible && (
                <form onSubmit={submitHandler}>
                    <label className="toolbar-label" htmlFor="start-date">
                        Start Date
                    </label>
                    <input
                        className="toolbar-input"
                        type="date"
                        name="start-date"
                        id="start-date"
                        onChange={(e) => setStartDate(e.target.value)}
                        value={startDate}
                    />
                    <label className="toolbar-label" htmlFor="end-date">
                        End Date
                    </label>
                    <input
                        className="toolbar-input"
                        type="date"
                        name="end-date"
                        id="end-date"
                        onChange={(e) => setEndDate(e.target.value)}
                        value={endDate}
                    />
                    <label className="toolbar-label" htmlFor="variables">
                        Select variables
                    </label>
                    <select
                        className="toolbar-select"
                        name="variables"
                        id="variables"
                        multiple
                        onChange={weatherVariablesHandler}>
                        {variablesList.map((variable) => (
                            <option key={variable.value} value={variable.value}>
                                {variable.name}
                            </option>
                        ))}
                    </select>
                    <button className="toolbar-button" type="submit">
                        Update charts
                    </button>
                </form>
            )}
        </div>
    );
};

export default Toolbar;
