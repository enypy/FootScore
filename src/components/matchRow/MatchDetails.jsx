import { useState } from "react"
import MatchModal from "./MatchModal"

export default function MatchDetails({ match }) {

    const [toggleModal, setToggleModal] = useState(false)

    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    }


    return (<>
        <div className="d-flex flex-column justify-content-between align-items-center my-2 col-4">
            <div>
                <h3>{match.event_final_result}</h3>
            </div>
            <div className="d-flex flex-column align-items-center text-center">
                <div>{(new Date(match.event_date)).toDateString()} {match.event_time}</div>
                <div>{match.league_name}</div>
                <div>{match.league_round}</div>
            </div>
            <div>
                <button 
                className="btn btn-dark mt-2" 
                type="button" 
                onClick={handleToggleModal} 
                data-bs-toggle="modal" 
                data-bs-target={'#modal' + match.event_key} 
                disabled={!(match.statistics.length > 0)}>
                Statistics
                </button>
            </div>
            {(match.statistics.length > 0) && <MatchModal 
            id={'modal' + match.event_key} 
            stats={match.statistics} 
            homeTeam={match.event_home_team} 
            awayTeam={match.event_away_team}
            />}
        </div>
    </>)
}