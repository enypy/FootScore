import { useEffect, useId, useRef, useState } from "react"

export default function CountrySelect({ label, setCountryId }) {
    const name = useId()
    const countryAbortController = useRef(new AbortController)
    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        fetch('https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=20c459ad48869f7cdc379dcaeb20c8ddea52b7b8f536508b480a91675c612eee', {
            signal: countryAbortController.current.signal,
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setCountryList(data.result))

        return () => {
            countryAbortController.current.abort()
            countryAbortController.current = new AbortController
        }

    }, [])


    return (<>
        <div className="mx-3">
            <label htmlFor={name} className="col-form-label-sm">{label}</label>
            <select name={name} onChange={e => setCountryId(e.target.value)} className="form-select form-select-sm" defaultValue="">
                <option value=""></option>
                {countryList.length > 0 && countryList.map((country) => (
                    <option key={country.country_key} value={country.country_key}>
                        {country.country_name}
                    </option>
                ))}
            </select>
        </div>
    </>)
}