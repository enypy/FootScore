import defaultLogo from '/src/assets/logo_onerror.jpg'

export default function Team({ teamName, teamLogo }) {

    return (
        <>
            <div className='d-flex flex-column justify-coontent-center align-items-center my-2 col-4'>
                <h4>{teamName}</h4>
                <img className="img-fluid" src={teamLogo ? teamLogo : defaultLogo} alt={teamName} onError={(event) => {
                    event.target.src = defaultLogo
                    event.onError = null
                }} />
            </div>
        </>
    )

}