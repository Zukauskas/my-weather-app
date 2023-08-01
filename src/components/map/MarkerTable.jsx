/* eslint-disable react/prop-types */
const MarkerTable = ({ markers, onRemoveMarker }) => {
    return (
        <div className="marker-table-container">
            <h2>Marker Coordinates</h2>
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
                                <button onClick={() => onRemoveMarker(index)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MarkerTable;
