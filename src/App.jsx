import "./App.css";
import { GlobalProvider } from "./components/context/Global.jsx";
import Charts from "./components/charts/Charts.jsx";
import MapContainer from "./components/map/MapContainer.jsx";
import Toolbar from "./components/toolbar/Toolbar.jsx";
import Auth from "./components/context/Auth.jsx";

function App() {
    return (
        <GlobalProvider>
            <Auth>
                <Toolbar />
                <MapContainer />
                <Charts />
            </Auth>
        </GlobalProvider>
    );
}

export default App;
