import React from 'react'
import Layout from '../../../components/Layout'
import { useState, useEffect } from 'react'
import ModalProduct from '../../../components/Modals/ModalProduct'
import axios from 'axios'
import { Config } from '../../../config'
import Swal from 'sweetalert2'

export default function Product() {
    const [toggle, setToggle] = useState(false)
    const [keys, setKeys] = useState()
    const [toggleData, setToggleData] = useState()
    const [data, setData] = useState()
    const [payload, setPayload] = useState()
    const [products, setProducts] = useState([])

    const handleChange = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }

    const getData = async () => {
        try {
            const resultCat = await axios.get(`${Config.base_url_api.base}/categories/`)
            const resultSub = await axios.get(`${Config.base_url_api.base}/subcategories/`)
            setData({
                categories: resultCat.data.result,
                subcategories: resultSub.data.result
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getProducts = async () => {
        try {
            const result = await axios.get(`${Config.base_url_api.base}/products/`)
            setProducts(result.data.result)
        } catch (error) {
            console.log(error);
        }
    }

    const save = async (e) => {
        const payloadData = {
            ...payload
        }
        try {
            const result = await axios.post(`${Config.base_url_api.base}/products/`, payloadData)
            Swal.fire({
                text: 'Suceess Add Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getProducts()
            setToggle(!toggle)
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal Server Error! Please Wait...',
                icon: 'error'
            })
            setToggle(!toggle)
        }
    }

    const update = async (e) => {
        const payloadData = {
            ...payload
        }
        try {
            const result = await axios.patch(`${Config.base_url_api.base}/products/?id=${payload?.ID}`, payloadData)
            Swal.fire({
                text: 'Suceess Update Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getProducts()
            setToggle(!toggle)
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal Server Error! Please Wait...',
                icon: 'error'
            })
            setToggle(!toggle)
        }
    }

    const remove = async (e) => {
        try {
            const result = await axios.delete(`${Config.base_url_api.base}/products/${payload?.ID}`)
            Swal.fire({
                text: 'Suceess Delete Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getProducts()
            setToggle(!toggle)
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal Server Error! Please Wait...',
                icon: 'error'
            })
            setToggle(!toggle)
        }
    }

    useEffect(() => {
        getData()
        getProducts()
        console.log(data?.categories, 'ccc');
    }, [])

    return (
        <div>
            <Layout>
                <div>
                    <div>
                        <h3>Data Produk</h3>
                    </div>
                    <div className='pt-5 pb-2'>
                        <button onClick={() => {
                            setToggle(!toggle)
                            setKeys('create')
                            setToggleData(null)
                        }} className='btn btn-primary'>
                            Tambah Produk
                        </button>
                    </div>

                    <table className='table table-stripper'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Produk</th>
                                <th>Kategori</th>
                                <th>Subkategori</th>
                                <th>Harga</th>
                                <th>Keterangan</th>
                                <th>Stok</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.length > 0 ?
                                    products?.map((val, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{val?.Name}</td>
                                            <td>{data?.categories?.find((v) => v.ID == val.Category_id)?.Name || "-"}</td>
                                            <td>{data?.subcategories?.find((v) => v.ID == val.Subcategory_id)?.Name || "-"}</td>
                                            <td>{val?.Price}</td>
                                            <td>{val?.Notes || "-"}</td>
                                            <td>{val?.Stock || 0}</td>
                                            <td>
                                                <a href='#edit' onClick={() => {
                                                    setToggle(!toggle)
                                                    setKeys('update')
                                                    setPayload(val)
                                                }} className='text-success'>Edit</a>
                                                <a onClick={() => {
                                                    setToggle(!toggle)
                                                    setKeys('delete')
                                                    setPayload(val)
                                                }} href='#delete' className='text-danger ms-4'>Hapus</a>
                                            </td>
                                        </tr>
                                    ))
                                    : <tr>
                                        <td colSpan={8}>Data tidak ditemukan</td>
                                    </tr>
                            }
                        </tbody>
                    </table>


                    <ModalProduct toggle={toggle} setToggle={setToggle} keys={keys} data={data} payload={payload} save={save} update={update} remove={remove} handleChange={handleChange} />

                </div>
            </Layout>
        </div>
    )
}
