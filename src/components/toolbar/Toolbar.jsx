import { useContext } from "react";
import { Global } from "../context/Global.jsx";

const Toolbar = () => {
    const {
        submitHandler,
        setStartDate,
        startDate,
        setEndDate,
        endDate,
        weatherVariablesHandler,
    } = useContext(Global);

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="start-date">Start Date</label>
                <input
                    type="date"
                    name="start-date"
                    id="start-date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                />
                <label htmlFor="end-date">End Date</label>
                <input
                    type="date"
                    name="end-date"
                    id="end-date"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                />
                <label htmlFor="variables">Select variables</label>

                <select
                    name="variables"
                    id="variables"
                    multiple
                    onChange={weatherVariablesHandler}>
                    <option value="temperature_2m">Temperature</option>
                    <option value="windspeed_10m">Wind speed</option>
                    <option value="relativehumidity_2m">Humidity</option>
                    <option value="dewpoint_2m">Dew Point</option>
                </select>
                <button type="submit">Update charts</button>
            </form>
        </div>
    );
};

export default Toolbar;
