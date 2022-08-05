import {GoogleLogout} from 'react-google-login';

function Logout({clientId, setIsLoggedIn, logoutAction}) {

    const logout = (res) => {
        setIsLoggedIn(false);
        logoutAction({
            name: '',
            image: '',
        })
    }

    return (
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={logout}
            render={renderProps => (
                <button className="login-logout-btn" onClick={renderProps.onClick}> Logout </button>
            )}
        />
    )
}

export default Logout