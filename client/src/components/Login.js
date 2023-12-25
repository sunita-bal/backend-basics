import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });

        const data = await res.json();
        if(data.error === "Register new email Id"){
            window.alert("Register Your EmailId")
            navigate("/register");
          }
          else if(data.status===400 || !data){
            window.alert('Invalid login credential');
          }
        
          else{
            window.alert('Login Successfully');
            navigate("/");
          }

    }
  return (
    <>
    <div class="container">
       

        
	<div class="screen">
		<div class="screen__content">
			<form method="POST" class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="email"
                    name="email"
                    value={email} 
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}class="login__input" placeholder="Enter Email"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input 
                    name="password"
                    type="password" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}class="login__input" placeholder="Password"/>
				</div>
				<button class="button login__submit" 
                value="Log In"
                onClick={loginUser}>
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </>
  )
}

export default Login
