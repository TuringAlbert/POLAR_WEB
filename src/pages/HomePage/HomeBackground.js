import React from 'react';
import '../../components/App.css';
import './HomeBackground.css';


function HomeBackground() {
  return (
    <div className='HomeBackground-container'>
      <video src='/videos/video-11.mp4' autoPlay loop muted />
      <h1>My Move</h1>
      <p>친환경 자산이 되다</p>
      <p>랜딩페이지 개발 중...</p>
    </div>
  );
}

export default HomeBackground;
