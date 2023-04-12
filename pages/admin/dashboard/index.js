import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CardDashboard from '../../../components/CardDashboard'
import Layout from '../../../components/Layout'
import { Config } from '../../../config'

export default function Dashboard() {
  const [products, setProducts] = useState()
  const [category, setCategory] = useState()

  const getProducts = async () => {
    try {
      const result = await axios.get(`${Config.base_url_api.base}/products/`)
      const resultC = await axios.get(`${Config.base_url_api.base}/categories/`)
      setProducts(result.data.result)
      setCategory(resultC.data.result)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getProducts()
  },[])

  const data = [
    {
      title: 'Produk',
      total: products?.length || 0
    },
    {
      title: 'Kategori',
      total: category?.length || 0
    }
  ]

  return (
    <Layout>
      <div>
        <div className='notification-success p-3'>
          <p className='fs-5'>Welcome to Dashboard Admin PT Multiverse</p>
        </div>

        <div className='mt-5'>
          <CardDashboard data={data} />
        </div>
      </div>
    </Layout>
  )
}
