import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { FormComponent } from './components/_index';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Flask App</h1>
        <p>Data from Flask API: {JSON.stringify(data)}</p>
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
