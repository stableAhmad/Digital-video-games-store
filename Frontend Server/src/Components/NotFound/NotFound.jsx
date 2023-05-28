import React from 'react';
import styles from './NotFound.module.css'; // Import the custom CSS module for styling

; // Import the image file

function NotFound() {
  return (
    <div className='container'>
      <div className="row">
        <div className={`${styles.notfound} col-sm-6 col-md-12 col-lg-12 rounded-4 text-center p-5 `}>

          <div className='w-100 bg-gradient rounded p-5'>
            <h1 className=' fw-bold'>404 Not Found</h1>
          </div>
          <div></div>

          <p className={styles['not-found-text']}>The page you're looking for does not exist.</p>
        </div>

      </div>

    </div>
  );
}

export default NotFound;
