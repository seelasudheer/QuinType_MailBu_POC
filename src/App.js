import React, { Suspense }  from 'react';
import './App.css';
import styles from './POC/CSS/app.module.css'

const Mailbu = React.lazy(() => import('./POC/Mailbu'));

function App() {
  return (
    <div className={styles.bgColor}>
    <div className="container">
    <Suspense fallback={<div>Loading...</div>}>
       <Mailbu />
       </Suspense>
    </div>
    </div>
  );
}

export default App;
