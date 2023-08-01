/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */
import { useContext } from "react";
import { Global } from "../context/Global.jsx";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const Graphs = () => {
    const { weatherData } = useContext(Global);
    if (!weatherData) {
        return <div>Loading...</div>;
    }
    console.log(weatherData);
    const charts = weatherData.map((data, index) => {
        const labels = data.hourly.time;
        const datasets = [];
        const uniqueUnits = {}; // Object to store unique units and their respective Y-axis indices
        const chartOptions = {
            chart: {
                type: "line",
            },
            title: {
                text: `Chart ${index + 1}`,
            },
            xAxis: {
                type: "category",
                categories: labels,
            },
            yAxis: [], // Initialize an empty array for Y-axes
            series: datasets,
            tooltip: {
                shared: true,
            },
        };

        for (const variable in data.hourly) {
            if (data.hourly.hasOwnProperty(variable) && variable !== "time") {
                const dataPoints = data.hourly[variable];

                const unit = data.hourly_units[variable] || ""; // Get the unit from the hourly_units object
                const axisIndex = uniqueUnits[unit];

                if (typeof axisIndex === "undefined") {
                    // If the unit is not found in uniqueUnits, add a new Y-axis
                    const yAxis = {
                        title: {
                            text: unit, // Use the unit as the Y-axis title
                        },
                    };
                    uniqueUnits[unit] = datasets.length; // Store the new Y-axis index in uniqueUnits
                    datasets.push({
                        name: variable,
                        data: dataPoints,
                        color: getRandomColor(),
                        yAxis: datasets.length, // Assign the data series to the newly created Y-axis
                    });
                    chartOptions.yAxis.push(yAxis); // Add the new Y-axis to the chartOptions
                } else {
                    // If the unit is found in uniqueUnits, add the data series to the existing Y-axis
                    datasets.push({
                        name: variable,
                        data: dataPoints,
                        color: getRandomColor(),
                        yAxis: axisIndex, // Assign the data series to the existing Y-axis
                    });
                }
            }
        }

        return (
            <div key={index}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        );
    });

    return <div>{charts}</div>;
};

export default Graphs;
// const Graphs = () => {
//     const { weatherData } = useContext(Global);
//     if (!weatherData) {
//         return <div>Loading...</div>;
//     }

//     console.log(weatherData);

//     const charts = weatherData.map((data, index) => {
//         const labels = data.hourly.time;
//         const datasets = [];

//         for (const variable in data.hourly) {
//             if (data.hourly.hasOwnProperty(variable) && variable !== "time") {
//                 datasets.push({
//                     name: variable,
//                     data: data.hourly[variable],
//                     color: getRandomColor(),
//                 });
//             }
//         }

//         const chartOptions = {
//             chart: {
//                 type: "line",
//             },
//             title: {
//                 text: `Marker ${index + 1}`,
//             },
//             xAxis: {
//                 categories: labels,
//             },
//             yAxis: {
//                 title: {
//                     text: "Value",
//                 },
//             },
//             series: datasets,
//             tooltip: {
//                 shared: true,
//             },
//         };

//         return (
//             <div key={index}>
//                 <HighchartsReact
//                     highcharts={Highcharts}
//                     options={chartOptions}
//                 />
//             </div>
//         );
//     });

//     return <div className="graphs-container">{charts}</div>;
// };

// export default Graphs;
