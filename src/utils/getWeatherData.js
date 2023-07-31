export const getWeatherData = async (start, end, variables) => {
    let responseData = {};
    const variablesArr = Object.values(variables);
    let variableString = variablesArr.join(",");

    try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=54.9706&longitude=24.0618&hourly=${variableString}&timezone=auto&start_date=${start}&end_date=${end}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        responseData = await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    return responseData;
};
