import { useEffect, useState } from 'react';
import './Card.css'

export const Card = ({id, image, name, username, email, onClick}) => {

    return (

        <div id={id} className="card">
            <div style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="cardImage">
            </div>
            <div className="cardData">
                <h1>{name}</h1>
                <a href="#"><span> {'@' +username}</span></a><br/>
                <a className='cardEmail' href={`mailto:${email}`}><span>{email}</span></a>
                <button onClick={onClick} className='cardBtn'>+</button>
            </div>
        </div>
  )
}
