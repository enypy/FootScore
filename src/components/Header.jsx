import logo from '/src/assets/logo.svg'

export default function Header() {
    return (
        <nav className="navbar navbar-dark" style={{backgroundColor: '#79dfc1'}}>
            <div className="container-fluid d-flex flex-row justify-content-center">
                <a className="navbar-brand mb-0 fs-4" href="/">
                <img src={logo} alt="Logo" width="40" height="27" className="d-inline-block align-text-top" />
                        FootScore
                </a>
            </div>
        </nav>
    )
}