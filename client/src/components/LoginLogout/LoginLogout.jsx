import {useEffect, useState} from 'react'
import { gapi } from "gapi-script";
import LoginConnector from './LoginConnector'
import LogoutConnector from './LogoutConnector'
import Logout from './Logout'


const clientId = '149435838456-4offmbhjtl0jlsoejmhnmdrrfsajgaah.apps.googleusercontent.com'

function LoginLogout() {

    const [isLoggedIn,setIsLoggedIn] = useState(false)

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        }

        gapi.load('client:auth2', start)
    },[])
    
    return (
        <div>
            {
                !isLoggedIn ? 
                <LoginConnector 
                    clientId={clientId} 
                    setIsLoggedIn={setIsLoggedIn}
                    /> 
                : 
                <LogoutConnector 
                    clientId={clientId} 
                    setIsLoggedIn={setIsLoggedIn}
                    />
            }
        </div>
    )
}

export default LoginLogout