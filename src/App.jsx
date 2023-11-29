import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import MatchFilterRow from './components/MatchFilterRow'
import MatchTable from './components/MatchTable'

function App() {

  const startupAbortController = useRef(new AbortController)

  const [to, setTo] = useState(new Date().toISOString().split('T', 1)[0])
  const [from, setFrom] = useState(new Date().toISOString().split('T', 1)[0])
  const [countryId, setCountryId] = useState('')
  const [teamId, setTeamId] = useState('')
  const timezone = 'Europe/Paris'
  const [matchList, setMatchList] = useState([])

useEffect(() => {

  fetch(
    `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=20c459ad48869f7cdc379dcaeb20c8ddea52b7b8f536508b480a91675c612eee&from=${from}&to=${to}&timezone=${timezone}&countryId=${countryId}&teamId=${teamId}`, {
      signal: startupAbortController.current.signal,
      method: 'GET'
    })
    .then(response => response.json())
    .then(function(response) {
      setMatchList(response.result)
    })
  return () => {
    startupAbortController.current.abort()
    startupAbortController.current = new AbortController
  }
}, [to, from, countryId, teamId])

  return (
<>
<Header />
<MatchFilterRow valueFrom={from} valueTo={to} onChangeFrom={setFrom} onChangeTo={setTo}/>
<MatchTable matchList={matchList}/>
</>
  )
}

export default App
