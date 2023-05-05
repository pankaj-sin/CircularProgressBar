import "./Spinner.css"
import React, { useEffect, useState } from 'react';

function Spinner() {              
                     
  const [downCount, setDownCount] = useState(6);
  const [isRunning, setRunning] = useState(false);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [strokeDasharray, setStrokeDasharray] = useState(1026);


  useEffect(() => {
    let interval = setInterval(() => {
      setDownCount((downCount) - 1);
    }, 1000);
    if (downCount === 0) {
      setRunning(true);
      clearInterval(interval);
    }
  }, [downCount]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setStrokeDashoffset(strokeDashoffset => strokeDashoffset === 0 ? 1026 : 0);
        setStrokeDasharray(strokeDasharray => strokeDashoffset === 0 ? 0 : 1026);
        if (strokeDasharray === 1026) {
          setStrokeDasharray(0);
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  
console.log('checking ========= in Runner==>', downCount)
  return (
    <div>
      <div className="container">
        <div className="outerCircle">
          <div className="innerCircle">
            <span className="progress-value">{!isRunning ?`${downCount}`: "GO!"}</span>  
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250px" height="250px">
          {downCount%2 === 0 && downCount>0  ? (
            <circle
              cx="50%"
              cy="50%"
              r="115"
              strokeLinecap="round"
              strokeDasharray="1026"
              strokeDashoffset="1026"
              style={{ animation: "anim 1s linear forwards" }}
            />
          ) : (
            <circle
              cx="50%"
              cy="50%"
              r="115"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
            />
          )}
        </svg>
      </div>
    </div>
  );
}

export default Spinner;
