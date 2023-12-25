import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Register = () => {
 
    const navigate = useNavigate();
   
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
    });

    let name,value;

    const handleInpupts = (e) => {
        name = e.target.name;
        value = e.target.value;


        setUser({...user, [name]:value});
    }

    const postData = async (e) => {
        e.preventDefault();

        const {name,email,password,cpassword} = user;

        if (email.trim() !== '') {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailRegex.test(email)) {
                window.alert('Please enter a valid email address.');
                return;
            }
        }
    

        const res = await fetch("/signup", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,password,cpassword
            })
        });


        const data = await res.json();
        console.log(data);


        if (data.status === 422 && data.error === "Missing required fields") {
            window.alert("Fill in the following required fields");
          } 
          else if (data.status === 422 && data.error === "email already exist") {
            window.alert("Email already exists. Please use a different email.");
          } 
          else if (data.status === 422 && data.error === "password are not matching") {
            window.alert("password are not matching");
          } 
          else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            navigate("/login");
          }
    }


    return (
        <>
            <div className="form">
                <form method="POST">

                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input id="name" className="input" name="name" type="name" placeholder=" " value={user.name} onChange = {handleInpupts}/>
                    <div className="cut"></div>
                    <label for="name" className="placeholder">Name</label>
                </div>
            
                <div className="input-container ic2">
                    <input id="email" className="input" type="email" placeholder=" " name="email" value={user.email} onChange = {handleInpupts}/>
                    <div className="cut cut-short"></div>
                    <label for="email" className="placeholder">Email</label>
                </div>

                <div className="input-container ic2">
                    <input id="password" className="input" type="password" placeholder=" " name="password" value={user.password} onChange = {handleInpupts}/>
                    <div className="cut cut-short"></div>
                    <label for="password" className="placeholder">Password</label>
                </div>

                <div className="input-container ic2">
                    <input id="cpassword" className="input" type="cpassword" placeholder=" " name="cpassword" value={user.cpassword} onChange = {handleInpupts}/>
                    <div className="cut cut-short"></div>
                    <label for="cpassword" className="placeholder">Confirm Password</label>
                </div>
                
                <button type="submit" className="submit" onClick = {postData}>submit</button>

                </form>
            </div>
        </>
    )
}

export default Register
