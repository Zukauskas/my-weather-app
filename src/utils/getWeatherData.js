export const getWeatherData = async (start, end, variables, markers) => {
    const weatherDataPromises = markers.map(async (marker) => {
        const lat = marker.lat.toFixed(6);
        const long = marker.lng.toFixed(6);
        const variablesArr = Object.values(variables);
        const variableString = variablesArr.join(",");

        try {
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=${variableString}&timezone=auto&start_date=${start}&end_date=${end}`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    });

    try {
        const weatherData = await Promise.all(weatherDataPromises);
        return weatherData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
