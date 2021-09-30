import React, { useRef, useState } from 'react'
import './register.scss'

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setEmail(passwordRef.current.value)
    }
    
    return (
        <div className="register">
            <div className="top">

                <div className="wrapper">
                    
                    <img className="logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt="" />

                    <div className="loginButton">Sign In</div>

                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {
                    !email ? (

                        <div className="input">
                            <input type="email" placeholder="email address" ref={emailRef}/>
                            <button className="registerButton" onClick={handleSart}>Get started</button>
                        </div>

                    ) : (
                        <form className="input">
                            <input type="password" placeholder="password" ref={passwordRef}/>
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </form>
                    )
                }
                
            </div>
        </div>
    )
}
