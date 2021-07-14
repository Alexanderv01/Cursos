
import { Button } from 'bootstrap'
import React, {useEffect, useState} from 'react'
const Cards = ({user}) => {
    const {name,login,picture} = user
    const [SEGUIR, setColor] = useState(true)

    console.log(user)
    return (
        <div className = "card" >
                <img src={picture.large} className="card-img-top" alt={login.username}/>
                    <div className="card-body">                        
                    <h5 className="card-title">{name.first}</h5>
                    <buttom
                         href="#" className={SEGUIR ? "btn btn-danger": "btn btn-dark" }
                        onClick={()=>setColor (!SEGUIR)}>Seguir</buttom>
                    </div>
        </div>
    )
}

export default Cards
