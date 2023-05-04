import "./Spinner.css"
import React, { useEffect } from 'react';
import { useState } from "react";


function Spinner() {              
                     
const[value,setValue] =useState(0)   

const [downCount,setDownCount] = useState(4);
const [isRunning,setRunning] = useState(false);

useEffect(() => {
  let interval = setInterval(() => {
    setDownCount(downCount - 1);
  }, 1000);
  if(downCount == 0){
    if(downCount === 0)
    setRunning(true);
    clearInterval(interval);
  }
}, [downCount]);

 console.log(downCount)


// useEffect(()=>{
//   let progressStartValue = 0,     
//   progressEndValue = 100,    
//   speed = 100;
  
// let progress = setInterval(() => {
//   progressStartValue = progressStartValue + 10 ;
//  setValue(progressStartValue)
//   if(progressStartValue === progressEndValue){
//       clearInterval(progress);
//   }    
// }, speed);  

// },[1000])


  return (
    <div>
 <div class="container">
            <div class="circular-progress" style={{background: `conic-gradient(#7d2ae8 ${downCount * 360}deg, #ededed 0deg)`}}>
   {
    
    <span class="progress-value">{!isRunning ?`${downCount}`: "GO!"}</span>  
    
  }
            </div>
 
        </div>
    </div>
  );
}
export default Spinner