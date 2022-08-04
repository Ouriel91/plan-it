import {useEffect, useState} from 'react'
import { gapi } from "gapi-script";
import Login from './Login'
import Logout from './Logout'


const clientId = '149435838456-4offmbhjtl0jlsoejmhnmdrrfsajgaah.apps.googleusercontent.com'

function LoginLogout() {

    const [user,setUser] = useState('')
    const [userImageUrl,setUserImageUrl] = useState('')

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        }

        gapi.load('client:auth2', start)
    },[])
    console.log(userImageUrl)
    return (
        <div>
            {
                user === '' ? 
                <Login 
                    clientId={clientId} 
                    setUser={setUser}
                    setUserImageUrl={setUserImageUrl}/> 
                : 
                <Logout 
                    clientId={clientId} 
                    setUser={setUser}
                    setUserImageUrl={setUserImageUrl}/>
            }
        </div>
    )
}

export default LoginLogout