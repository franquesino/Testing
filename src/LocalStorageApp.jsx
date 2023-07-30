// src/LocalStorageApp.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocalStorageApp = () => {
  const [value, setValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    axios.post('http://localhost:3001/localStorage', { key: 'persistedValue', value })
      .then(() => {
        setStoredValue(value);
      })
      .catch((error) => {
        console.error('Error al guardar en el servidor:', error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:3001/localStorage')
      .then((response) => {
        const localStorageItems = response.data;
        const persistedValueItem = localStorageItems.find(item => item.key === 'persistedValue');
        if (persistedValueItem) {
          setStoredValue(persistedValueItem.value);
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos del servidor:', error);
      });
  }, []);

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSave}>Guardar en el Local Storage</button>
      <div>
        Valor almacenado en Local Storage: {storedValue}
      </div>
    </div>
  );
};

export default LocalStorageApp;
