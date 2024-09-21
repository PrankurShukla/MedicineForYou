import React from 'react';
import './TopBar.css';

export default function TopBar() {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:singhdheeraj2696@gmail.com">shuklaprankur27@gmail.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 8470891623</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
        <a href="https://github.com/PrankurShukla" target='_blank' className="github"><i className="bi bi-github"></i></a>
          <a href="https://in.linkedin.com/in/prankur-shukla-07bb18241/" target='_blank' className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}
