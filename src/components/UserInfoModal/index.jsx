import './UserInfoModal.css'
import  { useEffect, useState } from 'react'



export const UserInfoModal = ({setOpenModal, city, setCity, guests, setGuests, adults, setAdults, kids, setKids, filtrar}) => {
    const [showCities, setShowCities] = useState(false)
    const [showGuests, setShowGuests] = useState(false)


    function hideSelectCity(e){
        setShowCities(false)
        setCity(e.target.textContent)
    }

    function showSelectCity(){
        setShowCities(true)
        setShowGuests(false)
        
    }

    function showSelectGuests(){
        setShowGuests(true)
        setShowCities(false)
    }

    function searchRooms(){
        setOpenModal(false)
    }



  return (


    <>
        <div id="userModal" className="userModal">
        <div id="modalContainer" className="modalContainer">
            <div className='searchHolder'>
                <label htmlFor="citySearch" className='inpLabel'>LOCATION</label>
                <input onClick={showSelectCity}  onChange={(e)=>setCity(e.target.value)} id="citySearch" className='cityInputOpen inputOpen' placeholder='Helsinki, Finland' value={city}></input>
                {showCities && <ul className='citySelect citySelector'>
                    <li onClick={(e)=>{hideSelectCity(e)}} className='cityOption' value="Helsinki">
                        <svg className="locationIcon" viewBox="0 0 282 367" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="#ffffffff">
                            </g>
                            <g id="#4f4f4fff">
                            <path fill="#4f4f4f" opacity="1.00" d=" M 132.31 74.32 C 153.26 71.12 175.37 77.73 191.25 91.71 C 202.98 101.99 211.34 116.15 214.42 131.47 C 218.06 146.72 215.07 162.56 210.14 177.16 C 197.81 210.40 177.25 239.79 155.41 267.42 C 152.74 270.12 151.07 274.06 147.31 275.44 C 142.77 277.60 137.09 275.72 134.31 271.66 C 112.02 244.14 91.20 214.83 77.79 181.86 C 74.21 171.58 70.55 161.05 70.35 150.06 C 70.03 147.58 69.58 145.08 70.30 142.63 C 71.24 118.18 85.86 94.91 107.20 83.04 C 114.83 78.38 123.59 75.96 132.31 74.32 M 134.64 121.82 C 122.48 125.75 114.72 139.47 117.64 151.91 C 120.03 165.43 134.72 175.16 148.08 171.94 C 156.22 170.76 163.04 164.86 166.65 157.65 C 169.41 152.89 168.83 147.16 168.65 141.89 C 167.59 133.59 161.46 126.65 154.25 122.84 C 148.16 120.05 140.99 119.81 134.64 121.82 Z" />
                            </g>
                        </svg> 
                        Helsinki, Finland
                    </li>
                    <li onClick={hideSelectCity}  className='cityOption' value={'Turku'}>
                        <svg className="locationIcon" viewBox="0 0 282 367" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="#ffffffff">
                            </g>
                            <g id="#4f4f4fff">
                            <path fill="#4f4f4f" opacity="1.00" d=" M 132.31 74.32 C 153.26 71.12 175.37 77.73 191.25 91.71 C 202.98 101.99 211.34 116.15 214.42 131.47 C 218.06 146.72 215.07 162.56 210.14 177.16 C 197.81 210.40 177.25 239.79 155.41 267.42 C 152.74 270.12 151.07 274.06 147.31 275.44 C 142.77 277.60 137.09 275.72 134.31 271.66 C 112.02 244.14 91.20 214.83 77.79 181.86 C 74.21 171.58 70.55 161.05 70.35 150.06 C 70.03 147.58 69.58 145.08 70.30 142.63 C 71.24 118.18 85.86 94.91 107.20 83.04 C 114.83 78.38 123.59 75.96 132.31 74.32 M 134.64 121.82 C 122.48 125.75 114.72 139.47 117.64 151.91 C 120.03 165.43 134.72 175.16 148.08 171.94 C 156.22 170.76 163.04 164.86 166.65 157.65 C 169.41 152.89 168.83 147.16 168.65 141.89 C 167.59 133.59 161.46 126.65 154.25 122.84 C 148.16 120.05 140.99 119.81 134.64 121.82 Z" />
                            </g>
                        </svg> 
                        Turku, Finland
                    </li>
                    <li onClick={hideSelectCity}  className='cityOption' value={'Oulu'}>
                        <svg className="locationIcon" viewBox="0 0 282 367" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="#ffffffff">
                            </g>
                            <g id="#4f4f4fff">
                            <path fill="#4f4f4f" opacity="1.00" d=" M 132.31 74.32 C 153.26 71.12 175.37 77.73 191.25 91.71 C 202.98 101.99 211.34 116.15 214.42 131.47 C 218.06 146.72 215.07 162.56 210.14 177.16 C 197.81 210.40 177.25 239.79 155.41 267.42 C 152.74 270.12 151.07 274.06 147.31 275.44 C 142.77 277.60 137.09 275.72 134.31 271.66 C 112.02 244.14 91.20 214.83 77.79 181.86 C 74.21 171.58 70.55 161.05 70.35 150.06 C 70.03 147.58 69.58 145.08 70.30 142.63 C 71.24 118.18 85.86 94.91 107.20 83.04 C 114.83 78.38 123.59 75.96 132.31 74.32 M 134.64 121.82 C 122.48 125.75 114.72 139.47 117.64 151.91 C 120.03 165.43 134.72 175.16 148.08 171.94 C 156.22 170.76 163.04 164.86 166.65 157.65 C 169.41 152.89 168.83 147.16 168.65 141.89 C 167.59 133.59 161.46 126.65 154.25 122.84 C 148.16 120.05 140.99 119.81 134.64 121.82 Z" />
                            </g>
                        </svg> 
                        Oulu, Finland
                    </li>
                    <li onClick={hideSelectCity}  className='cityOption' value={'Vaasa'}>
                        <svg className="locationIcon" viewBox="0 0 282 367" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="#ffffffff">
                            </g>
                            <g id="#4f4f4fff">
                            <path fill="#4f4f4f" opacity="1.00" d=" M 132.31 74.32 C 153.26 71.12 175.37 77.73 191.25 91.71 C 202.98 101.99 211.34 116.15 214.42 131.47 C 218.06 146.72 215.07 162.56 210.14 177.16 C 197.81 210.40 177.25 239.79 155.41 267.42 C 152.74 270.12 151.07 274.06 147.31 275.44 C 142.77 277.60 137.09 275.72 134.31 271.66 C 112.02 244.14 91.20 214.83 77.79 181.86 C 74.21 171.58 70.55 161.05 70.35 150.06 C 70.03 147.58 69.58 145.08 70.30 142.63 C 71.24 118.18 85.86 94.91 107.20 83.04 C 114.83 78.38 123.59 75.96 132.31 74.32 M 134.64 121.82 C 122.48 125.75 114.72 139.47 117.64 151.91 C 120.03 165.43 134.72 175.16 148.08 171.94 C 156.22 170.76 163.04 164.86 166.65 157.65 C 169.41 152.89 168.83 147.16 168.65 141.89 C 167.59 133.59 161.46 126.65 154.25 122.84 C 148.16 120.05 140.99 119.81 134.64 121.82 Z" />
                            </g>
                        </svg> 
                        Vaasa, Finland
                    </li>
                </ul>}
            </div>
           <div className='searchHolder'>
                <label  htmlFor="cityGuests" className='inpLabel'>GUESTS</label>
                <input onClick={showSelectGuests} onChange={(e)=>setGuests(e.target.value)} id='cityGuests' className='guestsInputOpen inputOpen' placeholder='Add guests' value={guests}></input>
                {showGuests && <ul className='citySelect'>
                    <div className='guestContainer' id="adults">
                        <strong>Adults</strong>
                        <p>Ages 13 or Above</p>
                        <div className='guestsSelector'>
                        <button className="material-icons" onClick={()=>setAdults(adults+1)}>add</button> {adults} <button className="material-icons" onClick={()=>setAdults(adults-1)}>remove</button>
                        </div>
                    </div>
                    <div className='guestContainer' id="adults">
                        <strong>Kids</strong>
                        <p>Ages 1 - 12</p>
                        <div className='guestsSelector'>
                        <button className="material-icons" onClick={()=>setKids(kids+1)} >add</button> {kids} <button className="material-icons" onClick={()=>setKids(kids-1)}>remove</button>
                        </div>
                    </div>

                </ul>
                }
                </div>
            
            <div className='searchHolder btnSearchSM'>
                <button onClick={filtrar}  className=' searchBtnOpen'>
                    <svg className='searchBtn searchIconOpen' viewBox="0 0 245 288" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g >
                        <path opacity="1.00" d=" M 52.75 71.64 C 62.38 61.92 75.45 55.60 89.11 54.48 C 94.41 53.31 99.76 54.43 105.04 55.06 C 123.60 58.21 140.14 70.93 148.15 87.93 C 154.74 101.21 155.66 117.04 151.23 131.13 C 148.91 138.81 144.65 145.76 139.67 152.01 C 140.38 152.74 141.10 153.47 141.82 154.20 C 144.26 154.17 146.71 154.02 149.15 154.24 C 151.41 155.78 152.94 158.15 154.88 160.07 C 166.15 171.48 177.66 182.69 188.84 194.18 C 193.63 199.65 189.30 209.34 182.06 209.43 C 177.80 210.08 174.31 207.18 171.70 204.21 C 159.74 192.18 147.69 180.24 135.74 168.20 C 135.58 164.77 136.87 160.51 133.36 158.35 C 121.35 168.43 105.40 173.91 89.71 172.36 C 74.85 171.46 60.86 164.02 50.81 153.21 C 41.53 142.73 35.64 129.05 35.56 114.95 C 34.97 98.96 41.39 82.89 52.75 71.64 M 91.60 72.57 C 80.39 73.25 69.72 79.00 62.70 87.72 C 56.41 95.56 53.13 105.78 53.84 115.82 C 54.42 128.60 61.59 140.88 72.35 147.77 C 86.26 157.01 105.97 156.48 119.22 146.25 C 128.28 139.63 134.31 129.05 135.46 117.90 C 136.71 107.32 133.55 96.30 126.89 87.98 C 118.74 77.31 104.93 71.41 91.60 72.57 Z" />
                        </g>
                    </svg>
                Search</button>
            </div>
            
            
     
                 
                
            </div>
            <div className='closeModal' onClick={()=>setOpenModal(false)}></div>
        </div>
    </>
    )
}
