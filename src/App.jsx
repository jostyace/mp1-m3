import { useEffect, useState } from "react"
import { CardsContainer } from "./components/CardsContainer"
import { NavBar } from "./components/NavBar"
import datos from '../src/assets/stays.json' 


function App() {
  const [openModal, setOpenModal] = useState(false)
  const [city, setCity]= useState('') 
  const [guests, setGuests]= useState(0) 
  const [adults, setAdults]= useState(0) 
  const [kids, setKids]= useState(0) 
  const [data, setData] = useState(null);
  const [results, setResults] = useState(null)
  
  useEffect(() => {
        setData(datos);
        setResults(data)
     }, [data]);

     function filtrar() {
      if (guests > 0 && city != '') {
      const citySearch = city.split(', ')[0];
      const newData = data.filter(room => room.city === citySearch && room.maxGuests >= guests)
      setResults(newData)
      setOpenModal(false)
      }

      if (guests >= 0 && city === '') {
        const newData = data.filter(room => room.maxGuests >= guests)
        setResults(newData)
        setOpenModal(false)
      }

      if (guests === 0 && city != '') {
        const citySearch = city.split(', ')[0];
        const newData = data.filter(room => room.city >= citySearch)
        setResults(newData)
        setOpenModal(false)
      } 

     }

  useEffect(() => {
    if(kids <= 0){setKids(0)}
    if(adults <= 0){setAdults(0)}
    const totalGuests = adults + kids;
    setGuests(totalGuests);
  }, [adults, kids]);

  return (
    <>
    <div className='AppContainer'>
      <NavBar openModal={openModal} setOpenModal={setOpenModal} city={city}  setCity={setCity} guests={guests}  setGuests={setGuests} adults={adults}  setAdults={setAdults} kids={kids}  setKids={setKids} filtrar={filtrar}/>     
      <CardsContainer results={results}/>
      
    </div>  
    
    </>
  )
}

export default App
