import { useEffect, useId, useRef, useState } from "react"

export default function LeagueSelect({ label, setLeagueId }) {

    const name = useId()
    const leagueAbortController = useRef(new AbortController)
    const [leagueList, setLeagueList] = useState([])

    useEffect(() => {
        fetch('https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=20c459ad48869f7cdc379dcaeb20c8ddea52b7b8f536508b480a91675c612eee', {
            signal: leagueAbortController.current.signal,
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setLeagueList(data.result))

        return () => {
            leagueAbortController.current.abort()
            leagueAbortController.current = new AbortController
        }

    }, [])


    return (<>
        <div className="mx-3">
            <label htmlFor={name} className="col-form-label-sm">{label}</label>
            <select name={name} onChange={e => setLeagueId(e.target.value)} className="form-select form-select-sm" defaultValue="">
                <option value=""></option>
                {leagueList.length > 0 && leagueList.map((league) => (
                    <option key={league.league_key} value={league.league_key}>
                        {league.league_name}
                    </option>
                ))}
            </select>
        </div>
    </>) 
}