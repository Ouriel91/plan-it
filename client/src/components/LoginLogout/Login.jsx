import {GoogleLogin} from 'react-google-login';
import './LoginLogout.css'

function Login({clientId, setIsLoggedIn, loginAction}) {

    const onSuccess = (res) => {
    
        setIsLoggedIn(true)
        loginAction({
            name: res.profileObj.givenName + " " + res.profileObj.familyName,
            image: res.profileObj.imageUrl
        })
    }

    const onFailure = (res) => {
        console.log("login failed: ", res);
    }

    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={renderProps => (
                <button className="login-logout-btn" onClick={renderProps.onClick}> Sign in </button>
            )}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
    )
}

export default Login