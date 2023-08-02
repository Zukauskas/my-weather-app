import "./App.css";
import { GlobalProvider } from "./components/context/Global.jsx";
import Charts from "./components/charts/Charts.jsx";
import MapContainer from "./components/map/MapContainer.jsx";
import Toolbar from "./components/toolbar/Toolbar.jsx";

function App() {
    return (
        <GlobalProvider>
            <Toolbar />
            <MapContainer />
            <Charts />
        </GlobalProvider>
    );
}

export default App;
