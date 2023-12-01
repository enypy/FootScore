import Team from "./matchRow/Team"
import MatchDetails from "./matchRow/MatchDetails"
import Loading from "./matchRow/Loading"

export default function MatchTable({ matchList, isLoading }) {
    console.log(matchList)

    return (
        <div>
            {matchList && !isLoading && matchList.map(function (match) {
                return <div className="card container my-2" key={'div' + match.event_key}>
                    <div key={'div-row' + match.event_key} className="row">
                        <Team key={'home' + match.event_key} teamName={match.event_home_team} teamLogo={match.home_team_logo} />
                        <MatchDetails key={'score' + match.event_key} match={match} />
                        <Team key={'away' + match.event_key} teamName={match.event_away_team} teamLogo={match.away_team_logo} />
                    </div>
                </div>
            })
            }
            {!matchList && !isLoading && <div className="d-flex flex-row justify-content-center mt-3"><h1>No Result Found</h1></div>}
            {isLoading && <Loading />}
        </div>
    )
}