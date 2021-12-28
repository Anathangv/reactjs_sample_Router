import React, {Fragment, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css'

export function NotFoundPage(){

  const [timeLeft, setTimeLeft] = useState(5);
  let navigate = useNavigate();

  useEffect(() => {
    if(!timeLeft)
      returnToMain();

      countDown();
  }, [timeLeft])

  function countDown(){
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);

      // **clearInterval to avoid memory leak**
      clearInterval(interval);
    },  1000);
  }

  function returnToMain(){    
    navigate("../", {replace: true});
  }

  return(
    <Fragment>
      <h1>404 - Page not found </h1>
      <div className='countdown'> 
        <span>This is page will be redirected in: </span><br/>
        <span><strong>{timeLeft}</strong></span>
      </div>
    </Fragment>
  );
}