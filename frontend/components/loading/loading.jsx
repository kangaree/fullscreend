import React from 'react';

const Loading = () => (
  <div id="loading-show-container">
    <div className="loading-backdrop" style={{ backgroundImage: `url(${window.static2})` }}>
      <div className="blank-header"></div>
      <div className="all-review-index-background">
      </div>
    </div>
  </div>
);

export default Loading;
