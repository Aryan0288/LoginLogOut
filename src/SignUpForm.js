import React from 'react'
import Template from './components/Template'
import family from './assests/family.JPG'
export default function SignUpForm({setIsLoggedIn}) {
    return (
            <Template
                title="Welcome Back"
                desc1="Build skill for today,tomorrow and beyond"
                desc2="Education to future proof your carrier"
                image={family}
                formtype="signup"
                setIsLoggedIn={setIsLoggedIn}
            />
            // <div>
            //     I am sign Up form.
            // </div>
    )
}
