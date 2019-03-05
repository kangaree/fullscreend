import React from 'react';

const Loading = () => (
  <div id="loading-show-container">
    <div className="loading-show-backdrop" style={{ backgroundImage: `url(${window.static})` }}>
    </div>
  </div>
);

export default Loading;
