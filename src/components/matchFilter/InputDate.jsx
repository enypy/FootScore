import { useId } from 'react'

export default function InputDate({ label, value, onChange, min, max}) {

    const name = useId()

    return (
        <div className='mx-3'>
            <label htmlFor={name} className="col-form-label-sm">{label}</label>
            <input className="form-control form-control-sm" type="date" name={name} value={value} onChange={(e) => {onChange(e.target.value)}} max={max} min={min}/>
        </div>
    )
}