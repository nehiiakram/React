import React from 'react'

const Card = (props) => {
    return (
        <div className="col">
            <div className="card h-100">

                <img
                    src={props.img} className="card-img-top" alt={props.title} />

                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>

                <div className="card-footer">
                    <small className="text-body-secondary fw-bold">Price: Rs. {props.price}/-</small>
                      <button className="add-cart-btn">Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Card