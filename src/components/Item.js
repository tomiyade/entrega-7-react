import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ info }) => {
    return (
        <div className="col-lg-4" >
            <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                    <div className="thumb-lg member-thumb mx-auto">
                        <img
                            src={info.img}
                            className="rounded-circle img-thumbnail"
                            alt="profile-image"
                        />
                    </div>
                    <div>
                        <h4>Nombre: {info.name}</h4>
                        <p className="text-muted">Precio: {info.price}</p>
                        <a href='#'><button>Agregar al Carrito</button></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Item