import React from 'react'

const ItemDetail = ({ data }) => (
    <div className="col-lg-4">
        <div className="text-center card-box">
            <div className="member-card pt-2 pb-2">
                <div className="thumb-lg member-thumb mx-auto">
                    <img
                        src={data.img}
                        className="rounded-circle img-thumbnail"
                        alt="profile-image"
                    />
                </div>
                <div>
                    <h4>Nombre: {data.name}</h4>
                    <button>Finalizar Compra</button>
                </div>
            </div>
        </div>
    </div>
)

export default ItemDetail