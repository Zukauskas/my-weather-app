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

const Charts = () => {
    const { weatherData } = useContext(Global);
    if (!weatherData) {
        return (
            <div>
                <h2>Charts</h2>
                <div>No charts to show</div>
            </div>
        );
    }

    const charts = weatherData.map((data, index) => {
        const labels = data.hourly.time;
        const datasets = [];
        const uniqueUnits = {};

        const chartOptions = {
            chart: {
                type: "line",
            },
            title: {
                text: `Marker ${index + 1}`,
            },
            xAxis: {
                type: "category",
                categories: labels,
            },
            yAxis: [],
            series: datasets,
            plotOptions: {
                line: {
                    lineWidth: 3,
                },
            },
            legend: {
                enabled: true,
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
            },
            tooltip: {
                shared: true,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderColor: "#999999",
                borderRadius: 5,
                borderWidth: 1,
            },
            credits: {
                enabled: false,
            },
        };

        for (const variable in data.hourly) {
            if (data.hourly.hasOwnProperty(variable) && variable !== "time") {
                const dataPoints = data.hourly[variable];

                const unit = data.hourly_units[variable] || "";
                const axisIndex = uniqueUnits[unit];

                if (typeof axisIndex === "undefined") {
                    const yAxis = {
                        title: {
                            text: unit,
                        },
                    };
                    uniqueUnits[unit] = datasets.length;
                    datasets.push({
                        name: variable,
                        data: dataPoints,
                        color: getRandomColor(),
                        yAxis: datasets.length,
                    });
                    chartOptions.yAxis.push(yAxis);
                } else {
                    datasets.push({
                        name: variable,
                        data: dataPoints,
                        color: getRandomColor(),
                        yAxis: axisIndex,
                    });
                }
            }
        }

        return (
            <div key={index} className="chart">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        );
    });

    return (
        <div>
            <h2>Charts</h2>
            <div className="charts-container">{charts}</div>
        </div>
    );
};

export default Charts;
