import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';
import './App.css';

type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      <h2>
        Longitude:
        {' '}
        {loading ? 'Carregando...' : (coordinates && coordinates.longitude) || ''}
      </h2>
      <h2>
        Latitude:
        {' '}
        {loading ? 'Carregando...' : (coordinates && coordinates.latitude) || ''}
      </h2>

    </>
  );
}

export default App;
