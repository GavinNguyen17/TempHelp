import React,  { useState } from "react";

const SignUp= () => {
  const [User, setUsername] = useState("");
  const [Pass, setPassword]=useState("");
  function getUser(val){
    setUsername(val.target.value)
  }
  function getPass(val){
    setPassword(val.target.value)
  }
  const clickHandler = () => {
    
    fetch("Sign-Up/"+User+"/"+Pass)
    
    .then(response => response.json())
    .then(function(data){
    data=JSON.parse(data);
    if(data.code===200)
    {
    setPassword(data.name)
    }
    })
    console.log(Pass) 
      }
    return (
    <div>
        
        <center>
            
            <h3>Sign-Up</h3>
            <h3>{User}</h3>
            <h3>Username</h3>
            <input
              type="text"
              placeholder="Enter the Username..."
              onChange={getUser}
            ></input>
            <h3>{Pass}</h3>
            <h3>Password</h3>
            <input
              type="text"
              placeholder="Enter the Password..."
              onChange={getPass}
            ></input>
            <br></br>
            <button onClick={clickHandler}>Sign Up</button>
            
        </center>
    </div>
    );
    }

export default SignUp;
    
