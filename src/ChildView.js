// src/ChildView.js
import React from 'react';
import { useAppContext } from './AppContext';

const ChildView = () => {
  const { data } = useAppContext();

  return (
    <div>
      <h2>Child View</h2>
      <p>Data from context: {data.message}</p>
    </div>
  );
};

export default ChildView;
