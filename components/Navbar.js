import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Navbar({ children }) {
    const { pathname } = useRouter()
    const [names, setNames] = useState()
    const setupNav = () => {
        if (pathname?.includes('about') || pathname?.includes('product') || pathname?.includes('contact')) {
            setNames('nav-link active text-black fw-bold fs-5')
        } else {
            setNames('nav-link active text-pink fw-bold fs-5')
        }
    }

    useEffect(() => {
        setupNav()
    }, [])
    return (
        <div className={`pe-5`}
        // style={ { position: 'fixed', zIndex: 10, width: '100%', top:0, backgroundColor:'white' } 
        // : { position: 'fixed', zIndex: 10, width: '100%', top:0 }}
        >
            <ul className={pathname?.includes('about') || pathname?.includes('product') || pathname?.includes('contact') ? `nav nav-a` : `nav nav-b`}>
                <li className="nav-item">
                    <Link href={'/'}>
                        <p className={names} aria-current="page">HOME</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={'/about'}>
                        <p className={names}>ABOUT US</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={'/product?category_id=1&subcategory_id=1'}>
                        <p className={names}>PRODUCT</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={'/contact'}>
                        <p className={names}>CONTACT US</p>
                    </Link>
                </li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}
