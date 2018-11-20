import React,{Component} from 'react'
const Timer = ()=>{
    return(
       
        <div className="main">
            <div className="time">
            <h1 className="timerH">00</h1>
            <h1 className="timerSepa">:</h1>
            <h1 className="timerM">08</h1>
            <h1 className="timerSepa">:</h1>
            <h1 className="timerS">50</h1>
            </div>
            <div class="timeText">
            <h2 className="Hour">Hour</h2>
            <h2 className="Minute">Minute</h2>
            <h2 className="Second">Second</h2>
            </div>
        </div>
    
) }
export default Timer