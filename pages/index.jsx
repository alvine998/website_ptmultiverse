import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { alcohol, bestprice, brand, charcoal, connects, customerreview, customerservice, deliverytime, email, email2, indomap, instagram, landing, mail, map, multi, panthenol, quality, telephone, whatsapp, whatsapp2 } from '../assets'
import Carousels from '../components/Carousels'
import FadeInSection from '../components/FadeInSection'
import FadeInSectionX from '../components/FadeInSectionX'
import FadeInSectionXR from '../components/FadeInSectionXR'
import FadeInSectionY from '../components/FadeInSectionY'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {

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

  const products = [
    {
      id: 1,
      title: 'Food Materials',
      image: panthenol
    },
    {
      id: 2,
      title: 'Chemical Product',
      image: alcohol
    },
    {
      id: 3,
      title: 'Cosmetic Ingredients',
      image: charcoal
    },
  ]

  const testimonials = [
    {
      id: 1,
      title: 'Fast respond, fast delivery, good quality materials',
      from: 'PT Lunar Mas'
    },
    {
      id: 2,
      title: 'Good quality and products',
      from: 'PT Ventura Apache'
    },
    {
      id: 3,
      title: 'The products was really nice',
      from: 'PT Abadi Lentera'
    },
  ]

  const [count, setCount] = useState(0)

  useEffect(() => {
  }, [count])
  return (
    <div>
      <Head>
        <title>PT Multiverse</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div style={{ overflow: 'hidden' }}>
        {/* Hero */}
        <div>
          <div className='right-bar'>
            <Navbar></Navbar>
          </div>
          <Carousels />
        </div>

        {/* Products Gallery */}
        <div className='bg-default' id="product">
          <h1 className='text-center'>Products Gallery</h1>
          <div className='container-gallery'>
            {
              products?.map((v, i) => (
                <div key={v}>
                  {
                    i % 2 == 0 ?
                      <FadeInSection>
                        <div className='box'>
                          <img style={{ borderRadius: '20px' }} src={v?.image.src} alt="products" width={300} height={200} />
                        </div>
                        <p className='text-center fs-5 fw-bold mt-2'>{v?.title?.toUpperCase()}</p>
                      </FadeInSection> :
                      <FadeInSectionY>
                        <div className='box'>
                          <img style={{ borderRadius: '20px' }} src={v?.image.src} alt="products" width={300} height={200} />
                        </div>
                        <p className='text-center fs-5 fw-bold mt-2'>{v?.title?.toUpperCase()}</p>
                      </FadeInSectionY>
                  }
                </div>
              ))
            }
          </div>
        </div>

        {/* Info */}
        <div id='about' className='bg-default-2'>
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

        {/* Testimonial */}
        {/* <FadeInSection>
          <div id='testi' className='bg-default-2'>
            <div className='d-testimoni'>
              <div className='h-testimoni'>
                <p className='fs-5 fw-bold'>Testimonial</p>
                <h2>
                  What Customer Say <br />About Us.
                </h2>
                <div className='d-flex justify-content-center gap-3' style={{ marginTop: 100 }}>
                  {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((v) => <div key={v} className='dotted' />)
                  }
                </div>
              </div>
              <div className='d-testimoni-2'>
                <div className='box-testi'>
                  <p className='text-slide'>{testimonials[count]?.title}</p>
                  <p className='text-slide'>{testimonials[count]?.from}</p>
                </div>
                <div>
                  <div>
                    <button className='btn'
                      onClick={() => {
                        if (count < testimonials?.length - 1) {
                          setCount(count + 1)
                          console.log(count, 'countes')
                          return
                        } else {
                          setCount(0)
                        }
                      }}
                    >
                      <KeyboardArrowUp fontSize={'large'} />
                    </button>
                  </div>

                  <div>
                    <button className='btn'
                      onClick={() => {
                        if (count < testimonials?.length - 1) {
                          setCount(count + 1)
                          console.log(count, 'countes')
                          return
                        } else {
                          setCount(0)
                        }
                      }}
                    >
                      <KeyboardArrowDown fontSize={'large'} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection> */}
      </div>

      {/* Footer */}
      <FadeInSection>
        <div className='bg-default-2' style={{ marginTop: 100 }}>
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
                        <a href='https://wa.me/${data?.Phone?.replace("+", "+628879567888")}/?text=Hello%2C%20World!' target={'_blank'} rel="noreferrer">+6288 79 567 888</a> and you will<br />
                        be directly to connect with us via whatsapp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='d-flex align-items-center ml-1-n'>
              <div className='card-box'>
                <div>
                  <img src={connects.src} alt="connect" width={250} height={150} style={{ borderRadius: '20px' }} />
                  <h5 className='mt-3'>Follow Us!</h5>
                  <div className='d-flex mt-3 justify-content-around'>
                    <Link href={'https://wa.me/${data?.Phone?.replace("+", "+628879567888")}/?text=Hello%2C%20World!'} rel="noopener">
                      <img src={whatsapp2.src} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                    </Link>
                    <Link target={'_blank'} href={'mailto:sales@ptmultiverse.com'} rel="noopener">
                      <img src={email2.src} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                    </Link>
                    <Link target={'_blank'} href={'https://www.instagram.com/multiverse_chemical/?hl=id'} rel="noopener">
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


      <div>
        <Footer />
      </div>
    </div >
  )
}
