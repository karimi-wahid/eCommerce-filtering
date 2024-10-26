import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ product }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
            {product.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </div>
    )
}

export default ProductList