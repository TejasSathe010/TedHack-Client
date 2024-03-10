import React from 'react';
import logo from '../images/Logo.png';

function HomeComponent() {
  return (
    <>
    <div class="main-content_container">
        <div>
            <img
            src={logo}
            alt="TADHack Logo"
            class="main-logo"
            />
            <p class="main-text description">
                Generate a redacted vcon in seconds...
            </p>
            <button class="upload-btn">Upload Audio</button>
        </div>
    </div>
    </>
  );
}

export default HomeComponent;
