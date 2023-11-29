import Team from "./matchRow/Team"
import MatchScore from "./matchRow/MatchScore"

export default function MatchTable({ matchList }) {

    console.log(matchList[33])

    return (
        <div>
            {matchList.map(function (match) {
                return <div className="d-flex flex-row justify-content-between" key={'div' + match.event_key}>
                    <Team key={'home' + match.event_key} teamName={match.event_home_team} teamLogo={match.home_team_logo} />
                    <MatchScore key={'score' + match.event_key} score={match.event_final_result} />
                    <Team key={'away' + match.event_key} teamName={match.event_away_team} teamLogo={match.away_team_logo} />
                </div>
            })
            }
        </div>
    )
}