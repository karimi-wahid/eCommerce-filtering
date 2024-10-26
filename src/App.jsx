import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import CategoryList from './components/CategoryList'
import axios from 'axios'

function App() {
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  const getCategory = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products/categories');
      setCategory(res.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const getProduct = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      setProduct(res.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  const getCategoryName = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/category/${categoryName.slug}`);
      setProduct(res.data.products)
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getCategory();
    getProduct();
  }, [])

  useEffect(() => {

    if (categoryName !== '') {
      getCategoryName();
    }

  }, [categoryName])

  return (
    <div className='max-w-[1380px] mx-auto mt-5 '>
      <h1 className='text-center text-3xl font-bold'>Products List</h1>
      <div className='grid grid-cols-[29%_auto] md:grid-cols-[20%_auto] mt-7'>
        <div className='ml-5'>
          <CategoryList category={category} setCategoryName={setCategoryName} />
        </div>

        <div className='w-full place-items-center'>
          {product.length >= 0 ?
            <ProductList product={product} />
            :
            'There is no Product'
          }
        </div>
      </div>
    </div>
  )
}

export default App
