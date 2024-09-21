// import React from 'react';
// import './Preloader.css'; 

// const Preloader = () => {
//   return (
//     <div className="preloader">
//       <div className="spinner"></div>
//     </div>
//   );
// };

// export default Preloader;


import React from 'react';

const Preloader = () => {
  const preloaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999999,
    overflow: 'hidden',
  };

  const spinnerStyle = {
    border: '8px solid rgba(0, 0, 0, 0.1)',
    borderTop: '8px solid #19a1e6',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={preloaderStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Preloader;
