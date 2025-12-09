import React, { useState } from 'react';
import './theme.css';

export default function App() {
  const [theme, setTheme] = useState('family');

  return (
    <div className={theme}>
      <header>
        <h1>Financial Legacy App</h1>
        <button onClick={() => setTheme(theme === 'family' ? 'lux' : 'family')}>
          Toggle Theme
        </button>
      </header>
      <main>
        <p>{theme === 'family'
          ? 'Family-Oriented Legacy Planning Theme'
          : 'Luxury Wealth Coaching Theme'}
        </p>
      </main>
    </div>
  );
}