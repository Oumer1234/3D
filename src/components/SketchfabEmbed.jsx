import React from 'react';

const SketchfabEmbed = () => {
  return (
    <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: '56.25%' }}>
      <iframe 
        title="Microsoft Surface Studio" 
        frameborder="0" 
        allowfullscreen 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true" 
        allow="autoplay; fullscreen; xr-spatial-tracking" 
        xr-spatial-tracking 
        execution-while-out-of-viewport 
        execution-while-not-rendered 
        web-share 
        src="https://sketchfab.com/models/f67b9ba53f5e4b93b53f3a9cfceb9acc/embed" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      </iframe>
      <p style={{ fontSize: 13, fontWeight: 'normal', margin: 5, color: '#4A4A4A' }}>
        <a 
          href="https://sketchfab.com/3d-models/microsoft-surface-studio-f67b9ba53f5e4b93b53f3a9cfceb9acc?utm_medium=embed&utm_campaign=share-popup&utm_content=f67b9ba53f5e4b93b53f3a9cfceb9acc" 
          target="_blank" 
          rel="nofollow" 
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
          Microsoft Surface Studio
        </a> 
        by 
        <a 
          href="https://sketchfab.com/Sidharth1?utm_medium=embed&utm_campaign=share-popup&utm_content=f67b9ba53f5e4b93b53f3a9cfceb9acc" 
          target="_blank" 
          rel="nofollow" 
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
          Sidharth1
        </a> 
        on 
        <a 
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f67b9ba53f5e4b93b53f3a9cfceb9acc" 
          target="_blank" 
          rel="nofollow" 
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabEmbed;
