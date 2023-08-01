const MarkerTable = ({ markers, onRemoveMarker }) => {
    return (
        <div className="marker-table-container">
            <h2>Marker Coordinates</h2>
            <table className="marker-table">
                <thead>
                    <tr>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {markers.map((marker, index) => (
                        <tr key={index}>
                            <td>{marker.lat}</td>
                            <td>{marker.lng}</td>
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
