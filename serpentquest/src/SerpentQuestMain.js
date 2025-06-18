import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SerpentQuestMain is the main container for the SerpentQuest game.
 * It centers the game area, displays the score, and sets up the layout
 * for the game display, user controls, and score tracking.
 */
function SerpentQuestMain() {
  // Game state stubs - to be connected later
  const score = 0;

  return (
    <div className="serpentquest-main-bg">
      <div className="serpentquest-main-container">
        {/* Score Display */}
        <header className="serpentquest-score-header">
          <span className="serpentquest-score-label">Score:</span>
          <span className="serpentquest-score-value">{score}</span>
        </header>

        {/* Game Area Placeholder */}
        <section className="serpentquest-game-area">
          <div className="serpentquest-game-area-inner">
            {/* TODO: Render Snake and Food here */}
            <span className="serpentquest-game-placeholder">Game Area</span>
          </div>
        </section>

        {/* Controls Placeholder */}
        <footer className="serpentquest-controls">
          <div className="serpentquest-controls-inner">
            {/* TODO: Add real controls */}
            <span className="serpentquest-controls-placeholder">
              Controls (Arrow keys / WASD)
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SerpentQuestMain;
