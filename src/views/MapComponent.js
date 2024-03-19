import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places']; // Required for geolocation

const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = ''; // Replace with your Google Maps API key

    useEffect(() => {
        const success = (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
        };

        const handleError = (err) => {
            setError(err.message);
        };

        // Check if geolocation is available
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, handleError);
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []); // Empty dependency array to ensure this effect runs only once on component mount

    const handleLoad = (mapInstance) => {
        setMap(mapInstance);
    };

    const center = currentLocation || { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco coordinates

    return (
        <LoadScript
            googleMapsApiKey={apiKey}
            libraries={libraries}
            onError={(err) => setError(err)}
        >
            {error ? (
                <div>Error loading Google Maps: {error}</div>
            ) : (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '400px' }} // Adjust map container size
                    zoom={currentLocation ? 14 : 10} // Adjust zoom level
                    center={center}
                    onLoad={handleLoad}
                >
                    {currentLocation && (
                        <Marker
                            key="userLocationMarker"
                            position={currentLocation}
                        />
                    )}
                </GoogleMap>
            )}
        </LoadScript>
    );
};

export default MapComponent;
