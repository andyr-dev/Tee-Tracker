import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='main-footer'>
        <div className='container'>
          <div className='row'>
            {/* col 1 */}
            <div className='col'>
              <h4>Tee Tracker INC</h4>
              <ul className='list-unstyled'>
                <li>201-867-5309</li>
                <li>Houston, Texas</li>
                <li>1300 Jackson Street</li>
              </ul>
            </div>
            {/* col 2 */}
            <div className='col'>
              <h4>Legal Stuff</h4>
              <ul className='list-unstyled'>
                <li>Our protections</li>
                <li>Contact our Legal Team</li>
                <li>FAQ's</li>
              </ul>
            </div>
            {/* col 3 */}
            <div className='col'>
              <h4>Terms of Service</h4>
              <ul className='list-unstyled'>
                <li>Subscriptions</li>
                <li>How to cancel service</li>
                <li>Restart service</li>
              </ul>
            </div>
          </div>
          <div className='bottom-footer'>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} Tee Tracker INC | All rights reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
      {/* This is the footer */}
    </footer>
  );
}
