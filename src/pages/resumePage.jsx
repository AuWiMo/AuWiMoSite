import React from 'react';

import Resume from '../components/home/myresume.pdf';


function ResumePage() {

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src={Resume}
        title="Resume 2024-09-13.pdf"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
    
  );
}

export default ResumePage;

