import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import Input from '../../../components/Input/Input'
import Layout from '../../../components/Layout'
import { Config } from '../../../config'

export default function Profile() {
    const [payload, setPayload] = useState()
    const handleChange = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        try {
            const result = await axios.get(`${Config.base_url_api.base}/profiles/`)
            if (result.data.result?.length > 0) {
                setPayload(result.data.result[0])
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal server error',
                icon: 'error'
            })
        }
    }

    const update = async () => {
        try {
            const payloadData = {
                ...payload
            }
            const result = await axios.patch(`${Config.base_url_api.base}/profiles/?id=${payload?.ID}`, payloadData)
            getData()
            Swal.fire({
                text: 'Success Update Data',
                icon: 'success'
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal server error',
                icon: 'error'
            })
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Layout>
                <div>
                    <div>
                        <h3>Profil Perusahaan</h3>
                    </div>
                    <div>
                        <div className='row'>
                            <div className='col'>
                                <Input onChange={handleChange} defaultValue={payload?.Name || ""} name="name" label='Nama Perusahaan' placeholder='Masukkan nama perusahaan' />
                            </div>
                            <div className='col'>
                                <Input onChange={handleChange} defaultValue={payload?.Address || ""} name="address" label='Alamat Perusahaan' placeholder='Masukkan alamat perusahaan' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Input onChange={handleChange} defaultValue={payload?.Phone || ""} name="phone" label='No Telepon / Handphone' placeholder='Masukkan no telepon / handphone' />
                            </div>
                            <div className='col'>
                                <Input onChange={handleChange} defaultValue={payload?.Email || ""} name="email" label='Email Perusahaan' placeholder='Masukkan email perusahaan' type={'email'} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Input onChange={handleChange} defaultValue={payload?.Lat || ""} name="lat" label='Latitude' placeholder='-6092829' />
                            </div>
                            <div className='col'>
                                <Input onChange={handleChange} defaultValue={payload?.Long || ""} name="long" label='Longitude' placeholder='0987678' />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col'>

                            </div>
                            <div className='col'>
                                <div className='d-flex justify-content-end'>
                                    <button onClick={update} className='btn btn-success w-50'>
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
