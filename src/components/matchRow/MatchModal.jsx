export default function MatchModal({ id, stats, homeTeam, awayTeam }) {

    return (
        <>
            <div className="modal" tabIndex="-1" aria-hidden="false" id={id}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">{homeTeam}</th>
                                        <th scope="col">{awayTeam}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.map((stat) => (
                                        <tr key={'tr'  + stat.type}>
                                            <th key={'th'  + stat.type} scope="row">{stat.type}</th>
                                            <td key={'td'  + stat.type}>{stat.home}</td>
                                            <td key={'td1'  + stat.type}>{stat.away}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}