import React, { useEffect } from 'react'

function FaceSvg() {
    useEffect(()=>{
        document.addEventListener('mousemove', (e) => {
            const face = document.querySelector('.face-container');
            const leftPupil = document.getElementById('left-pupil');
            const rightPupil = document.getElementById('right-pupil');
            const leftEyebrow = document.getElementById('left-eyebrow');
            const rightEyebrow = document.getElementById('right-eyebrow');
        
            const { left, top, width, height } = face.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const angleX = (e.clientX - centerX) / 30; // adjust sensitivity
            const angleY = (e.clientY - centerY) / 30;
        
            // Move pupils
            leftPupil.setAttribute('cx', 70 + angleX);
            leftPupil.setAttribute('cy', 90 + angleY);
            rightPupil.setAttribute('cx', 130 + angleX);
            rightPupil.setAttribute('cy', 90 + angleY);
        
            // Move eyebrows
            leftEyebrow.setAttribute('y', 75 + angleY * 0.5); // slight movement
            rightEyebrow.setAttribute('y', 75 + angleY * 0.5);
        });
        
    },[])
  return (
    <div><div class="face-container">
    <svg viewBox="0 0 200 200" width="50" height="50">
    
      <circle cx="100" cy="100" r="90" fill="#feb47b"/>
      
   
      <circle id="left-eye" cx="70" cy="90" r="10" fill="#fff"/>
      <circle id="right-eye" cx="130" cy="90" r="10" fill="#fff"/>
  
      
      <circle id="left-pupil" cx="70" cy="90" r="4" fill="#000"/>
      <circle id="right-pupil" cx="130" cy="90" r="4" fill="#000"/>
  
      
      <rect id="left-eyebrow" x="55" y="75" width="30" height="5" fill="#333"/>
      <rect id="right-eyebrow" x="115" y="75" width="30" height="5" fill="#333"/>

  <path d="M70 130 C85 150, 115 150, 130 130" stroke="black" stroke-width="4" fill="none" />

  
  {/* <!-- Realistic Hair --> */}
  {/* <path d="M50 70 Q80 40, 120 70 T150 70" fill="#4169E1" />
  <path d="M50 60 Q80 30, 120 60 T150 60" fill="#4169E1" />
  <path d="M60 50 Q80 25, 120 50 T140 50" fill="#4169E1" />
  <path d="M65 45 Q85 20, 115 45 T135 45" fill="#4169E1" /> */}
    </svg>
  </div>
  </div>
  )
}

export default FaceSvg