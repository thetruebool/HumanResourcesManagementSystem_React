import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router-dom'

import PostJobAndAddCV from './PostJobAndAddCV'

export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(true)

    const history = useHistory()

    function handleSignOut() {
        setisAuthenticated(false)
        history.push("/")
    }

    function goMainMenu() {
        history.push("/")
    }


    function goSearchEmployersPage() {
        history.push("/searchEmployers/")
    }

    function handleSignIn() {
        setisAuthenticated(true)
    }

    function goEmployerRegistrationForm() {
        history.push("/employerRegistration/")
    }



    return (
        <div>
            <Menu inverted fixed="top">
                <Menu.Item
                    onClick={goMainMenu}
                    name='You Are HIRED !'
                />


                <Menu.Item
                    onClick={goSearchEmployersPage}
                    name='Search Employers !'
                />

                <Menu.Item
                    onClick={goEmployerRegistrationForm}
                    name='Employer Registration'
                />

                <Menu.Menu position='left' >

                    {isAuthenticated ?
                        < PostJobAndAddCV />
                        : null
                    }
                </Menu.Menu>


                <Menu.Menu position="right">

                    {isAuthenticated ?
                        <SignedIn signOut={handleSignOut} /> :
                        <SignedOut signIn={handleSignIn} />}

                </Menu.Menu>





            </Menu>
        </div>
    )
}
