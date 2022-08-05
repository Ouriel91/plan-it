import {GoogleLogin} from 'react-google-login';


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
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
    )
}

export default Login