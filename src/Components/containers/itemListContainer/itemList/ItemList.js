import React, { useEffect, useState, } from 'react';
import Item from './item/Item';




const ItemList = ({ products, producto, onAdd }) => {

    return (
        < div className='itemListCont'>

            <div className='itemListGrid'>


                {products.map((producto) => <Item key={producto.id} producto={producto} onAdd={onAdd} stock={producto.stock} />)}

                {/* <Item key={products.id} producto={products} onAdd={onAdd} stock={products.stock} /> */}

            </div>
        </div>
    )
}

export default ItemList