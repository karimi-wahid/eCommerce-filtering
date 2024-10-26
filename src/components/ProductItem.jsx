import React from 'react'

const ProductItem = ({ product }) => {
    return (
        <div className='w-[250px] p-5 hover:translate-y-1 hover:scale-105 text-center py-2 shadow-md border'>
            <div>
                <img src={product.thumbnail} className='w-[230px]' />
            </div>
            <h2 className='text-xl font-semibold text-start'>{product.title}</h2>
            <p className='text-start'>${product.price}</p>
        </div>
    )
}

export default ProductItem