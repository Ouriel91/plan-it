import {GoogleLogin} from 'react-google-login';


function Login({clientId, setUser, setUserImageUrl}) {

    const onSuccess = (res) => {
        setUser(res.profileObj.givenName + " " + res.profileObj.familyName)
        setUserImageUrl(res.profileObj.imageUrl)
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