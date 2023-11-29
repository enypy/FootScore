import defaultLogo from '/src/assets/logo_onerror.jpg'

export default function Team({ teamName, teamLogo }) {

    return (
        <>
            <div>
                <h4>{teamName}</h4>
                <img src={teamLogo ? teamLogo : defaultLogo} alt={teamName} onError={(event) => {
                    event.target.src = defaultLogo
                    event.onError = null
                }} />
            </div>
        </>
    )

}