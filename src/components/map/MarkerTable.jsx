/* eslint-disable react/prop-types */
import "./MarkerTable.css";

const MarkerTable = ({ markers, onRemoveMarker, updateCharts }) => {
    return (
        <div className="marker-table-container">
            <h2 className="table-title">Marker Coordinates</h2>
            <table className="marker-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {markers.map((marker, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{marker.lat.toFixed(2)}°N</td>
                            <td>{marker.lng.toFixed(2)}°E</td>
                            <td>
                                <button
                                    className="remove-button"
                                    onClick={() => onRemoveMarker(index)}>
                                    DEL
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="marker-table-button" onClick={updateCharts}>
                Update Charts
            </button>
        </div>
    );
};

export default MarkerTable;
