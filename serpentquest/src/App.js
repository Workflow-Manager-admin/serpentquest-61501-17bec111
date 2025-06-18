import React from 'react';
import './App.css';
import SerpentQuestMain from './SerpentQuestMain';
import './SerpentQuestMain.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn" disabled style={{ opacity: 0.65, cursor: 'not-allowed' }}>
              Template Button
            </button>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: '100vh', background: '#f7fafb', boxSizing: 'border-box', paddingTop: 64 }}>
        {/* SerpentQuest Main Game Container */}
        <SerpentQuestMain />
      </main>
    </div>
  );
}

export default App;