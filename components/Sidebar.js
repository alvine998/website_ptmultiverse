import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { TreeItem, TreeView } from '@mui/lab'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { logo } from '../assets'

export default function Sidebar() {
  const {pathname} = useRouter()
  return (
    <div>
      <div className='sidebar'>
        <div className='pl-5 pt-3'>
          <img src={logo.src} alt='logo multiverse' width={100} height={100} />
        </div>
        <div className='mt-5'>
          <ul>
            <li>
              <Link href={'/admin/dashboard'}>
                <p className={pathname?.includes('dashboard') ? 'fs-5' : 'text-black fs-5'}><ChevronRight/> Dashboard</p>
              </Link>
            </li>
            <li>
              <Link href={'/admin/profile'}>
                <p className={pathname?.includes('profile') ? 'fs-5' : 'text-black fs-5'}><ChevronRight/> Profil Perusahaan</p>
              </Link>
            </li>
            <li>
              <Link href={'/admin/product'}>
                <p className={pathname?.includes('product') ? 'fs-5' : 'text-black fs-5'}><ChevronRight/> Data Produk</p>
              </Link>
            </li>
            <li>
              <Link href={'/admin/category'}>
                <p className={pathname?.includes('category') ? 'fs-5' : 'text-black fs-5'}><ChevronRight/> Kategori</p>
              </Link>
            </li>
            <li>
              <Link href={'/admin/account'}>
                <p className={pathname?.includes('account') ? 'fs-5' : 'text-black fs-5'}><ChevronRight/> Akun Pengguna</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
