import React from 'react'
import Layout from '../../../../components/Layout'
import { useState, useEffect } from 'react'
import ModalCategory from '../../../../components/Modals/ModalCategory'
import axios from 'axios'
import { Config } from '../../../../config'
import Swal from 'sweetalert2'
import { Button, Modal } from 'react-bootstrap'
import Input from '../../../../components/Input/Input'
import { AddCircleOutline, RemoveCircle } from '@mui/icons-material'
import { useRouter } from 'next/router'

export default function Category() {
    const [keys, setKeys] = useState()
    const [SubCategory, setSubCategory] = useState([])
    const [payload, setPayload] = useState()
    const [subCatToggle, setSubCatToggle] = useState(false)
    const [toggleData, setToggleData] = useState()
    const router = useRouter()
    const data = router.query

    const handleChange = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }

    const getCategory = async () => {
        try {
            const resultS = await axios.get(`${Config.base_url_api.base}/subcategories/`)
            let subs = resultS.data.result?.filter((v) => v.Category_id == data?.ID)
            setSubCategory(subs)
            console.log(data, 'data');
        } catch (error) {
            console.log(error)
        }
    }

    const save = async (e) => {
        e.preventDefault()
        const payloadData = {
            ...payload,
            category_id: data?.ID
        }
        try {
            const result = await axios.post(`${Config.base_url_api.base}/subcategories/`, payloadData)
            Swal.fire({
                text: 'Suceess Add Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getCategory()
            setSubCatToggle(!subCatToggle)
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal Server Error! Please Wait...',
                icon: 'error'
            })
            setSubCatToggle(!subCatToggle)
        }
    }

    const update = async (e) => {
        e.preventDefault()
        const payloadData = {
            ...payload
        }
        try {
            const result = await axios.patch(`${Config.base_url_api.base}/subcategories/?id=${payload?.ID}`, payloadData)
            Swal.fire({
                text: 'Suceess Update Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getCategory()
            setSubCatToggle(!subCatToggle)
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal Server Error! Please Wait...',
                icon: 'error'
            })
            setSubCatToggle(!subCatToggle)
        }
    }

    const remove = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.delete(`${Config.base_url_api.base}/subcategories/${payload?.ID}`)
            Swal.fire({
                text: 'Suceess Delete Data',
                icon: 'success'
            })
            setPayload({ name: '', notes: '' })
            getCategory()
            setSubCatToggle(!subCatToggle)
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal Server Error! Please Wait...',
                icon: 'error'
            })
            setSubCatToggle(!subCatToggle)
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
                        <h3>Kategori {">"} Subkategori</h3>
                    </div>
                    <div className='pt-5 pb-2'>
                        <button onClick={() => {
                            setSubCatToggle(!subCatToggle)
                            setKeys('create')
                        }} className='btn btn-primary'>
                            Tambah Subkategori
                        </button>
                    </div>

                    <table className='table table-stripper'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Subkategori</th>
                                <th>Keterangan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                SubCategory?.length > 0 ?
                                    SubCategory?.map((v, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{v?.Name || "-"}</td>
                                            <td>{v?.Notes || "-"}</td>
                                            <td>
                                                <a href='#edit' onClick={() => {
                                                    setSubCatToggle(!subCatToggle)
                                                    setKeys('update')
                                                    setPayload(v)
                                                }} className='text-success ms-4'>Edit</a>
                                                <a onClick={() => {
                                                    setSubCatToggle(!subCatToggle)
                                                    setKeys('delete')
                                                    setPayload(v)
                                                }} href='#delete' className='text-danger ms-4'>Hapus</a>
                                            </td>
                                        </tr>
                                    )) : <tr>
                                        <td colSpan={4}>Data tidak ditemukan</td>
                                    </tr>
                            }
                        </tbody>
                    </table>


                    {
                        subCatToggle ?
                            <Modal
                                show={subCatToggle}
                                onHide={() => setSubCatToggle(!subCatToggle)}
                                animation
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{keys == 'create' ? 'Tambah Subkategori' : keys == 'delete' ? 'Hapus Subkategori' : 'Ubah Subkategori'}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    {
                                        keys == 'delete' ? <>
                                            <p>Apakah anda yakin akan menghapus {payload?.Name}?</p>
                                        </> :
                                            <>
                                                <Input label={'Nama'} name="name" onChange={handleChange} defaultValue={payload?.Name || ""} placeholder='Masukkan Nama' />
                                                <Input label={'Keterangan'} name="notes" onChange={handleChange} defaultValue={payload?.Notes || ""} placeholder='Masukkan Keterangan' />
                                            </>
                                    }

                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant={keys == 'delete' ? "danger" : "primary"} onClick={keys == 'create' ? save : keys == 'delete' ? remove : update}>{keys == 'delete' ? 'Hapus' : 'Simpan'}</Button>
                                </Modal.Footer>
                            </Modal>
                            : ''
                    }

                </div>
            </Layout>
        </div>
    )
}
