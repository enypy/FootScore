import { useId } from 'react'

export default function InputDate({ label, value, onChange, min, max}) {

    const name = useId()

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="date" name={name} value={value} onChange={(e) => {onChange(e.target.value)}} max={max} min={min}/>
        </div>
    )
}