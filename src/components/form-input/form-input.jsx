import React from 'react'
import './form-input.scss'

const FormInput = ({handleChange, label,...otherprops})=>(
<div className='group'>
    <input className='form-input' onChange={handleChange} {...otherprops}/>
    {label ?(
        <label className={` form-input-label  ${otherprops.value.length ? 'shrink' : ''}`}>{label} </label>):(null)}
</div>
)

export default FormInput;