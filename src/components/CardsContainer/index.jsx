import { useEffect, useState } from 'react'
import { Card } from '../Card'
import './CardsContainer.css'
import { UserInfoModal } from '../UserInfoModal'
import { Search } from '../Search'

export const CardsContainer = () => {
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users/');
          if (!response.ok) {
            throw new Error('No se pudo obtener datos de la API');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.log(error);
        } 
      };
  
      fetchData();
    }, []);

    function loadModal(usuario){

        setOpenModal(true)
        setUserInfo(usuario);

    }

    const handleSearchInputChange = (event) => {
      setSearchInput(event.target.value);
    };



  return (
    <>
        <Search handleSearchInputChange={handleSearchInputChange} />
        <div className="cardsContainer">
        {data && data.filter(usuario => usuario.name.toLowerCase().includes(searchInput.toLowerCase())).map(usuario => (
            <Card 
            key={usuario.id}
            id = {usuario.id}
            image = {`https://picsum.photos/seed/${usuario.id}/300/300`}
            name = {usuario.name}
            username = {usuario.username}
            email = {usuario.email}
            onClick={() => loadModal(usuario)}  
            
            />
          ))}
        </div>
        {openModal && <UserInfoModal userInfo={userInfo} setOpenModal={setOpenModal}   />}
    </>
  )
}
