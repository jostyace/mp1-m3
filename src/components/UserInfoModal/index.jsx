import './UserInfoModal.css'
import  { useEffect, useState } from 'react'



export const UserInfoModal = ({userInfo, setOpenModal}) => {
    const [actualUsuario, setActualUsuario] = useState(userInfo)

    useEffect(() => {

    }, [userInfo]);
    const address = actualUsuario.address
    const company = actualUsuario.company
    const geo = address.geo

  return (

    <>
        <div id="userModal" className="userModal">
            <div id="modalContainer" className="modalContainer">
                <button onClick={()=>setOpenModal(false)} className="close">x</button>
                <div className="user-card">
                    <div className="user-header">
                        <div style={{backgroundImage: `url(https://picsum.photos/seed/${actualUsuario.id}/300/300)`}} className="cardImage"/>
                        <h2 className="user-name">{actualUsuario.name}</h2>
                        <p className="user-username">@{actualUsuario.username}</p>
                    </div>
                    <div className="user-details">
                        <p><strong>Email:</strong> {actualUsuario.email}</p>
                        <p><strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
                        <p><strong>Phone:</strong> {actualUsuario.phone}</p>
                        <div className='companyData'>
                            <div className='companyHeader'><strong >DATOS CORPORATIVOS</strong></div>
                            <p><strong>Company:</strong> {actualUsuario.company.name}</p>
                            <p><strong>Website:</strong> <a className='companyWeb' href={actualUsuario.website}>{actualUsuario.website}</a></p>
                            <p><strong>Business:</strong> {company.bs}</p>
                            <p>{company.catchPhrase}</p>
                        </div>
                    </div>
                </div>
                <div className='user-card'>
                <iframe
  width="100%"
  height="100%"
  src={`https://www.openstreetmap.org/export/embed.html?bbox=${address.geo.lng},${address.geo.lat},${address.geo.lng},${address.geo.lat}`}></iframe>

                </div>   
            </div>
        </div>
    </>
    )
}
