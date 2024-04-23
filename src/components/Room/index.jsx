import { useEffect, useState } from 'react';
import './Room.css'

export const Room = ({id, image, superhost, type, rating, beds, title, onClick}) => {

    return (

        <div id={id} className="room">
            <div style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="roomImage">
            </div>
            
            <div className="roomData">
                <div className='roomInfo'>
                    {superhost === true ? <h1 className='superHost'>Super host</h1> : null }
                    
                    <span className='typeRoom'> {type} {beds !== null ? '. ' +beds+' beds' : null}</span><br/>
                </div>    
                <span className='roomStars'>
                <svg className='star' viewBox="0 0 290 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g><path opacity="1.00" d=" M 127.73 42.80 C 129.01 36.87 134.74 31.90 140.94 32.29 C 146.83 31.89 152.62 35.94 154.19 41.63 C 161.21 64.14 167.91 86.75 174.84 109.29 C 192.89 109.29 210.93 109.30 228.97 109.28 C 232.57 109.30 236.21 109.15 239.77 109.81 C 246.12 111.13 250.99 117.47 250.60 123.95 C 250.63 128.25 248.13 132.25 244.71 134.72 C 227.89 146.77 211.01 158.75 194.21 170.83 C 200.65 192.26 207.57 213.53 213.97 234.96 C 216.97 243.24 209.92 253.27 201.01 252.74 C 195.29 253.40 191.14 249.01 186.96 245.89 C 171.65 234.28 156.36 222.64 141.11 210.96 C 124.41 223.62 107.68 236.25 91.04 248.99 C 88.00 251.67 83.96 253.18 79.89 252.66 C 71.79 252.04 65.41 243.12 68.05 235.29 C 74.49 213.75 81.37 192.35 87.94 170.86 C 71.13 158.30 53.76 146.49 36.86 134.05 C 30.71 129.69 29.77 120.22 34.64 114.55 C 37.32 111.17 41.65 109.11 45.98 109.28 C 66.41 109.31 86.84 109.28 107.27 109.30 C 114.24 87.17 120.77 64.93 127.73 42.80 Z" /></g>
                </svg>
                 {rating}
                 </span>
            </div>
            <h1 className='roomDesc'>{title}</h1>
        </div>
  )
}
