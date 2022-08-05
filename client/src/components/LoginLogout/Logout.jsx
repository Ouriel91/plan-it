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
        />
    )
}

export default Logout