import { useEffect, useState } from 'react'
import { Room } from '../Room'
import './CardsContainer.css'
import { Search } from '../Search'

export const CardsContainer = ({openModal, setOpenModal, results}) => {

    function loadModal(){
        setOpenModal(true)
    }

  return (
    <>
        <Search   />
        <div className="cardsContainer">
        <div className='staysHeader'>
          <h1>Stays in Finland</h1>
          <span>{results && results.length}+ stays</span>
        </div>
        <div className='roomsList'>
        
        {results && results.map((rooms, index) => (
            
            <Room 
            key={index}
            id = {rooms.city}
            image = {rooms.photo}
            superhost = {rooms.superHost}
            type = {rooms.type}
            rating = {rooms.rating}
            beds= {rooms.beds}
            title= {rooms.title}
            onClick={() => loadModal(rooms)}  
            
            />
          ))}
          </div>
        </div>
        
    </>
  )
}
