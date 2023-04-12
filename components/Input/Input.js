import React, { InputHTMLAttributes } from 'react'

const defaultStyles = 'form-control'

export default function Input(props) {
    return (
        <div  style={{marginTop:20}} >
            {
                props.label ? <label className='form-label'>{props.label}</label> : ''
            }
            <input className='form-control w-100' {...props}/>
        </div>
    )
}
