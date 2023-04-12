import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { connects, email, email2, instagram, map, telephone, whatsapp, whatsapp2 } from '../assets'
import FadeInSection from './FadeInSection'

export default function ConnectPages() {
    return (
        <FadeInSection>
            <div className='bg-default-2' id='mobile-dev'>
                <div className='d-footer-2'>
                    <div>
                        <h2>Connect With Us!</h2>
                        <div className='mt-5'>
                            <div className='d-flex flex-row gap-5'>
                                <div>
                                    <img src={email.src} alt="email" width={70} height={70} />
                                </div>
                                <div>
                                    <p className='fs-5 fw-bold' >Email</p>
                                    <div style={{ marginTop: '-20px' }}>
                                        <p>
                                            Just one click this address {" "}
                                            <a target={'_blank'} href={'mailto:sales@ptmultiverse.com'} rel="noreferrer">sales@ptmultiverse.com</a><br />
                                            And you can easily discuss with us on email
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-row gap-5 mt-3'>
                                <div>
                                    <img src={telephone.src} alt="email" width={70} height={70} />
                                </div>
                                <div>
                                    <p className='fs-5 fw-bold' >Call</p>
                                    <div style={{ marginTop: '-20px' }}>
                                        <p>
                                            Click this number {" "}
                                            <a href='tel:622155711888' target={'_blank'} rel="noreferrer">+6221 557 11 888</a> and you will<br />
                                            be directly to connect with us via call
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-row gap-5 mt-3'>
                                <div>
                                    <img src={whatsapp.src} alt="email" width={70} height={70} />
                                </div>
                                <div>
                                    <p className='fs-5 fw-bold' >Whastapp</p>
                                    <div>
                                        <p style={{ marginTop: '-20px' }}>
                                            Click this number {" "}
                                            <a href='whatsapp://send?abid=628879567888&text=Hello%2C%20World!' target={'_blank'} rel="noreferrer">+6288 79 567 888</a> and you will<br />
                                            be directly to connect with us via whatsapp
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex align-items-center ms-auto'>
                        <div className='card-box'>
                            <div>
                                <img src={connects.src} alt="connect" width={250} height={150} style={{ borderRadius: '20px' }} />
                                <h5 className='mt-3'>Follow Us!</h5>
                                <div className='d-flex mt-3 justify-content-around'>
                                    <Link href={'whatsapp://send?abid=628879567888&text=Hello%2C%20World!'} rel="noopener">
                                        <img src={whatsapp2.src} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                                    </Link>
                                    <Link target={'_blank'} href={'mailto:sales@ptmultiverse.com'} rel="noopener">
                                        <img src={email2.src} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                                    </Link>
                                    <Link target={'_blank'} href={'https://instagram.com/'} rel="noopener">
                                        <img src={instagram.src} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                                    </Link>
                                    <Link target={'_blank'} href={'https://www.google.com/maps/place/PT+UNIVERSE+SOLUSI+DIGITAL/@-6.1077868,106.6180349,12z/data=!4m10!1m2!2m1!1spt+multiverse!3m6!1s0x2e69f5caa2f92667:0x8ffaa52281733371!8m2!3d-6.2080777!4d106.8204522!15sCg1wdCBtdWx0aXZlcnNlkgEQc29mdHdhcmVfY29tcGFueeABAA!16s%2Fg%2F11jt04mf8x'} rel="noopener">
                                        <img src={map.src} alt="connect" width={35} height={35} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}
