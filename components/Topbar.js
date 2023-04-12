import Link from 'next/link'
import React from 'react'

export default function Topbar() {
  return (
    <div>
      <div className='topbar'>
        <div className='d-flex justify-content-end pe-4 pt-3'>
          <Link href={'/admin/login'}>
            <p className='text-danger'>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
