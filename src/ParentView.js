// src/ParentView.js
import React from 'react';
import { useAppContext } from './AppContext';

const ParentView = () => {
  const { data, updateData } = useAppContext();

  const handleUpdate = () => {
    updateData({ message: 'Updated from ParentView' });
  };

  return (
    <div>
      <h1>Parent View</h1>
      <p>Data from context: {data.message}</p>
      <button onClick={handleUpdate}>Update Data</button>
      <ParentView/>
    </div>
  );
};

export default ParentView;
