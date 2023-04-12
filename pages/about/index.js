import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { bestprice, customerreview, customerservice, deliverytime, indomap, quality } from '../../assets'
import FadeInSection from '../../components/FadeInSection'
import FadeInSectionX from '../../components/FadeInSectionX'
import FadeInSectionXR from '../../components/FadeInSectionXR'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function index() {
    const provides = [
        {
            id: 1,
            title: 'High Quality Material',
            icon: quality
        },
        {
            id: 2,
            title: 'On Time Delivery',
            icon: deliverytime
        },
        {
            id: 3,
            title: 'Competitive Price',
            icon: bestprice
        },
        {
            id: 4,
            title: 'Excelent Services & Solution',
            icon: customerservice
        },
        {
            id: 5,
            title: 'Sourcing The Product That Customers Need',
            icon: customerreview
        },
    ]
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
            </Head>
            <div className='right-bar'>
                <Navbar>
                </Navbar>
            </div>
            <div id='about2' className='bg-default-2'>
                <FadeInSectionX>
                    <p className='text-center text-p-responsive'>
                        <strong>PT. Multiverse Anugerah Chemindo</strong> is a company with high expertise in
                        importing & distributing raw materials for cosmetic, food, and chemical industries.
                    </p>
                </FadeInSectionX>
                <FadeInSectionXR>
                    <h5 className='text-center text-purple'>We Provide :</h5>
                    <div className='py-3'>
                        <div className='d-provide'>
                            {
                                provides?.filter((v, i) => i < 3)?.map((val) => (
                                    <div key={val} className='box-provide'>
                                        <div style={{ marginTop: -30 }}>
                                            <img alt='v' src={val?.icon.src} width={70} height={70} />
                                        </div>
                                        <p className='fs-5'>{val?.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='d-provide'>
                            {
                                provides?.filter((v, i) => i > 2)?.map((val) => (
                                    <div key={val} className='box-provide'>
                                        <div style={{ marginTop: -30 }}>
                                            <img alt='v' src={val?.icon.src} width={70} height={70} />
                                        </div>
                                        <p className='fs-5'>{val?.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </FadeInSectionXR>
            </div>
            <FadeInSection>
                <div className='px-5'>
                    <div className='bg-default-2'>
                        <div className='container-vision'>
                            <div className='box-title'>
                                <h5 className='text-center text-white'>Our Vision & Mission</h5>
                            </div>
                            <div className='box-vm mt-3'>
                                <p className='text-center px-2'>
                                    Recognized as the leader of chemical raw materials distribution
                                    industry by all related industry players.
                                </p>
                            </div>
                            <div className='d-mision'>
                                <div className='box-vm mt-3'>
                                    <p className='text-center px-2'>
                                        Deliver superior quality chemical products that contribute
                                        positive impact to our customer`s business growth.
                                    </p>
                                </div>
                                <div className='box-vm mt-3'>
                                    <p className='text-center px-2'>
                                        Forging meaningful, lifelong engagement and partnership with our
                                        customer through customer centric offer.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h5 className='mt-4 text-center'>We supply on a nationwide</h5>
                        <div className='d-image-vision'>
                            <img alt='maps' src={indomap.src} className="img-maps" />
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </FadeInSection>

        </div>
    )
}