import "./App.css";
import { GlobalProvider } from "./components/context/Global.jsx";
import Graphs from "./components/graphs/Graphs.jsx";
import Map from "./components/map/Map.jsx";
import Toolbar from "./components/toolbar/Toolbar.jsx";

function App() {
    return (
        <GlobalProvider>
            <Toolbar />
            <Map />
            <Graphs />
        </GlobalProvider>
    );
}

export default App;
