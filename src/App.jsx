import "./App.css";
import { GlobalProvider } from "./components/context/Global.jsx";
import Graphs from "./components/graphs/Graphs.jsx";
import MapContainer from "./components/map/MapContainer.jsx";
import Toolbar from "./components/toolbar/Toolbar.jsx";

function App() {
    return (
        <GlobalProvider>
            <Toolbar />
            <MapContainer />
            <Graphs />
        </GlobalProvider>
    );
}

export default App;
