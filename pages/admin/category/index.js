import React from 'react'
import Layout from '../../../components/Layout'
import { useState, useEffect } from 'react'
import ModalCategory from '../../../components/Modals/ModalCategory'
import axios from 'axios'
import { Config } from '../../../config'
import Swal from 'sweetalert2'
import { Button, Modal } from 'react-bootstrap'
import Input from '../../../components/Input/Input'
import { AddCircleOutline, RemoveCircle } from '@mui/icons-material'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Category() {
    const [toggle, setToggle] = useState(false)
    const [keys, setKeys] = useState()
    const [toggleData, setToggleData] = useState()
    const [category, setCategory] = useState([])
    const [SubCategory, setSubCategory] = useState([])
    const [payload, setPayload] = useState()
    const [subCatToggle, setSubCatToggle] = useState(false)
    const [payloadSub, setPayloadSub] = useState()
    const [arrSub, setArrSub] = useState([
        SubCategory?.length > 0 ? SubCategory : { name: '', notes: '' }
    ])

    const router = useRouter()

    const handleChange = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }

    const getCategory = async () => {
        try {
            const result = await axios.get(`${Config.base_url_api.base}/categories/`)
            const resultS = await axios.get(`${Config.base_url_api.base}/subcategories/`)
            setCategory(result.data.result)
            setSubCategory(resultS.data.result)
        } catch (error) {
            console.log(error)
        }
    }

    const save = async (e) => {
        e.preventDefault()
        const payloadData = {
            ...payload
        }
        try {
            const result = await axios.post(`${Config.base_url_api.base}/categories/`, payloadData)
            Swal.fire({
                text: 'Suceess Add Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getCategory()
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
        e.preventDefault()
        const payloadData = {
            ...payload
        }
        try {
            const result = await axios.patch(`${Config.base_url_api.base}/categories/?id=${toggleData?.ID}`, payloadData)
            Swal.fire({
                text: 'Suceess Update Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getCategory()
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
        e.preventDefault()
        try {
            const result = await axios.delete(`${Config.base_url_api.base}/categories/${toggleData?.ID}`)
            Swal.fire({
                text: 'Suceess Delete Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getCategory()
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
        getCategory()
    }, [])

    return (
        <div>
            <Layout>
                <div>
                    <div>
                        <h3>Kategori</h3>
                    </div>
                    <div className='pt-5 pb-2'>
                        <button onClick={() => {
                            setToggle(!toggle)
                            setKeys('create')
                            setToggleData(null)
                        }} className='btn btn-primary'>
                            Tambah Kategori
                        </button>
                    </div>

                    <table className='table table-stripper'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Kategori</th>
                                <th>Keterangan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category?.length > 0 ?
                                    category?.map((v, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{v?.Name || "-"}</td>
                                            <td>{v?.Notes || "-"}</td>
                                            <td>
                                                <Link href={{pathname:`/admin/category/subcategory`, query:v}}>
                                                    Subkategori
                                                </Link>
                                                <a href='#edit' onClick={() => {
                                                    setToggle(!toggle)
                                                    setKeys('update')
                                                    setToggleData(v)
                                                }} className='text-success ms-4'>Edit</a>
                                                <a onClick={() => {
                                                    setToggle(!toggle)
                                                    setKeys('delete')
                                                    setToggleData(v)
                                                }} href='#delete' className='text-danger ms-4'>Hapus</a>
                                            </td>
                                        </tr>
                                    )) : <tr>
                                        <td colSpan={4}>Data tidak ditemukan</td>
                                    </tr>
                            }
                        </tbody>
                    </table>


                    <ModalCategory toggle={toggle} setToggle={setToggle} toggleData={toggleData} remove={remove} update={update} save={save} payload={payload} handleChange={handleChange} keys={keys} />
                    {
                        subCatToggle ?
                            <Modal
                                show={subCatToggle}
                                onHide={() => setSubCatToggle(!subCatToggle)}
                                animation
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Subkategori</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    {
                                        arrSub?.map((val, i) => (
                                            <div key={i} className='d-flex gap-2 justify-content-center'>
                                                <Input label={i == 0 ? 'Nama' : ''} defaultValue={val?.name || val?.Name} placeholder='Masukkan Nama' />
                                                <Input label={i == 0 ? 'Keterangan' : ''} defaultValue={val?.notes || val?.Notes} placeholder='Masukkan Keterangan' />
                                                <button className={i == 0 ? "btn mt-5" : 'btn mt-3'} type='button' onClick={() => {
                                                    arrSub?.map((v) => {
                                                        if (val.name == v.name) {
                                                            setArrSub(arrSub?.splice(0, 1))
                                                        }
                                                    })
                                                }}>
                                                    <RemoveCircle color='error' />
                                                </button>
                                            </div>
                                        ))
                                    }
                                    <div className='d-flex gap-2 justify-content-end'>
                                        <button className='btn m-2' type='button' onClick={() => { setArrSub([...arrSub, { name: '', notes: '' }]) }}>
                                            <AddCircleOutline color='success' />
                                        </button>
                                    </div>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="primary">Simpan</Button>
                                </Modal.Footer>
                            </Modal>
                            : ''
                    }

                </div>
            </Layout>
        </div>
    )
}
