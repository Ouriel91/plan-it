import {GoogleLogout} from 'react-google-login';

function Logout({clientId, setUser, setUserImageUrl}) {

    const logout = (res) => {
        setUser('')
        setUserImageUrl('')
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