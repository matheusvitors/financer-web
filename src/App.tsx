import React from 'react';
import logo from './assets/logo.svg'

export const App: React.FC = () => {
  return (
    <div style={{ background: 'green', width: '100%', height: '98vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <img src={logo} width={600} />
    </div>
  );
}