import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import "./LoginHome.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

class LoginHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signIN : true,

            //sign in
            signin_email: null,
            signin_password: null,

            //sign up
            signup_name: null,
            signup_email: null,
            signup_password:null

        }
    }
    
    switchPanel=()=>{
        if(this.state.signIN)
            this.setState({signIN : false });
        else
            this.setState({signIN : true });    
    }

    signUp=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.signup_email, this.state.signup_password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            let payload = {
                "userID" : user.uid,
                "userName": this.state.signup_name,
                "userImage" : "www.dummyurl.com"
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            };

            fetch("http://localhost:8080/api/userService/save",requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("user",JSON.stringify(data));
                window.location.reload();
            })
            .catch(error =>{

            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    signInMethod=()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.signin_email, this.state.signin_password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            //navigate to main page if login successully
            fetch("http://localhost:8080/api/getAllUsers/"+user.uid)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("user",JSON.stringify(data));
                window.location.reload();
            })
            .catch(error =>{

            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    
    render() { 
        return ( 
            <div className='main__container'>
                <Grid className='main__content' container>
                    <Grid item xs={7}>
                        <div className='fblogo'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width="300px"></img>
                        </div>

                        <div>
                            <h1 className='text'>Facebook helps you connect and share with the people in your life.</h1>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className='logincard__container'> {
                            this.state.signIN == true ?
                            <div container="login__panel">
                                <div>
                                    <input onChange={(event)=>this.state.signin_email=event.currentTarget.value} type="text" className="login__input" placeholder='Email Address'></input>
                                </div>

                                <div>
                                    <input onChange={(event)=>this.state.signin_password=event.currentTarget.value} type="password" className='login__input' placeholder='Password'></input>
                                </div>

                                <div>
                                    <button onClick={this.signInMethod} className='login__button'>Log in</button>
                                </div>

                                <div>
                                    <div className='forget_Text'>Forgotten password?</div>
                                </div>

                                <div className='dividor'></div>

                                <div>
                                    <button className='login__createnew' onClick={this.switchPanel}>Create New Account</button>
                                </div>
                            </div>
                            :
                            <div container="login__panel">
                                <div>
                                    <input onChange={(event)=>this.state.signup_name=event.currentTarget.value} type='text' className='login__input' placeholder='Name'></input>
                                </div>

                                <div>
                                    <input onChange={(event)=>this.state.signup_email=event.currentTarget.value} type='text' className='login__input' placeholder='Email Address'></input>
                                </div>

                                <div>
                                    <input onChange={(event)=>this.state.signup_password=event.currentTarget.value} type='password' className='login__input' placeholder='Password'></input>
                                </div>

                                <div>
                                    <button onClick={this.signUp} className='login__button'> Sign Up</button>
                                </div>

                                <div>
                                    <div onClick={this.switchPanel} className='forget_Text'>Already have account?</div>
                                </div>

                            </div>
                        }
                        </Paper>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        );
    }
}
 
export default LoginHome;