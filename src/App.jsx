import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import MatchFilterRow from './components/MatchFilterRow'
import MatchTable from './components/MatchTable'

function App() {

  const startupAbortController = useRef(new AbortController)

  const [to, setTo] = useState(new Date().toISOString().split('T', 1)[0])
  const [from, setFrom] = useState(new Date().toISOString().split('T', 1)[0])
  const [isLoading, setIsLoading] = useState(true)
  const [countryId, setCountryId] = useState('')
  const [leagueId, setLeagueId] = useState('')
  const timezone = 'Europe/Paris'
  const [matchList, setMatchList] = useState([])

  
  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        setIsLoading(true)

        const response = await fetch(
          `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=20c459ad48869f7cdc379dcaeb20c8ddea52b7b8f536508b480a91675c612eee&from=${from}&to=${to}&timezone=${timezone}&countryId=${countryId}&leagueId=${leagueId}`,
          {
            signal: startupAbortController.current.signal,
            method: 'GET',
          }
        )

        const data = await response.json()
        setMatchList(data.result)
      } catch (error) {
        console.error('Error fetching match data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMatchData()

    return () => {
      startupAbortController.current.abort()
      startupAbortController.current = new AbortController()
    }
  }, [to, from, countryId, leagueId])

  return (
<>
<Header />
<MatchFilterRow valueFrom={from} valueTo={to} onChangeFrom={setFrom} onChangeTo={setTo} setCountryId={setCountryId} setLeagueId={setLeagueId}/>
<MatchTable matchList={matchList} isLoading={isLoading}/>
</>
  )
}

export default App
