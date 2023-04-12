import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

export default function BreadsCrumb(props) {
    return (
        <div>
            <Breadcrumbs aria-label='breadcrumb' >
                {
                    props?.items?.map((v, i) => (
                        <div key={i}>
                            {
                                v?.current !== true ? <>
                                    <Link underline='hover' color={'inherit'} href={v?.href}>
                                        {v?.label}
                                    </Link>
                                </> : <>
                                    <Typography color={'text.primary'}>{v?.label}</Typography>
                                </>
                            }
                        </div>
                    ))
                }
            </Breadcrumbs>
        </div>
    )
}
