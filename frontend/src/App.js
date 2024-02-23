import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { FormComponent } from './components/_index';

const network = 'http://127.0.0.1:5000/'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(network + 'data');
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Flask App</h1>
        <div>
          <p>↓Data from Flask API↓</p>
          <p>| {JSON.stringify(data.message)} |</p>
        </div>
        <FormComponent endpoint={network + 'form'} />
      </header>
    </div>
  );
}

export default App;
