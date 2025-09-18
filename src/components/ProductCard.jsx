import React from 'react'


const ProductCard = ( {product} ) => {
    return (
        <div className="card" key={product.id}>
            <img src={product.image} alt={product.title}/>

            

            <div classname="info">
                <h4>{product.title}</h4>
                    <p>{product.rating.rate} Stars</p>
                    <p>{product.category}</p>
                <div className="inforow">
                    <p>₱<strong>{product.price}</strong></p>
                    <button>BUY NOW</button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard