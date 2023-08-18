# My Weather App

Weather app build with React.js

## 🌟 About

This is a homework assignment for an interview, but I might improve it with more features

Project deployed on Vercel: https://my-weather-app-gold.vercel.app/

## 🎯 Project features/goals

-   React.js
-   Open-meteo for weather data
-   Google Maps Javascript API for interactive map
-   Highcharts for chart visualization
-   Authorization
-   Docker

## 🧰 Getting Started

<br>

### 💻 Prerequisites

Node.js - _download and install_

```
https://nodejs.org
```

Git - _download and install_

```
https://git-scm.com
```

### 🏃 Run locally

Would like to run this project locally? Open terminal and follow these steps:

1. Clone the repo
    ```sh
    git clone git@github.com:Zukauskas/my-weather-app.git
    ```
2. Go to `my-weather-app` folder and install NPM packages
    ```sh
    cd my-weather-app
    npm i
    ```
    or
    ```sh
    cd my-weather-app
    npm install
    ```
3. Run the project by running

    ```sh
    npm run dev
    ```

4. The app should be running at http://localhost:5173/

    Take note that running locally you will need and API key from Google Maps

### Run from docker image

1. Pull docker image from public hub
    ```sh
    docker pull tautzuk/my-weather-app
    ```
2. Run docker image
    ```sh
    docker run --publish 8000:80 tautzuk/my-weather-app
    ```

## Usage

1. Access the app in your web browser.
2. Authorize yourself with Google.
3. Add at least one marker on the map, by clicking on selected place in map.
4. Use the toolbar to select start date, end date and variables for weather.
5. Click "Update Charts" in a toolbar window to send a request for data.
6. Click on the map to add more markers. A table will show what markers are added.
7. Click "Update Charts" in Marker table to regenerate charts when new markers are added.
8. You can remove markers by clicking "DEL" button in the markers table.

## 📝 Contact

Tautvydas Ž.:

-   [Github](https://github.com/Zukauskas)
-   [LinkedIn](https://www.linkedin.com/in/tautzuk/)

## ⚠️ License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
