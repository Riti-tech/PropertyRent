import BackgroundImage from "../Homepage/BackgroundImage"
import Search from "../../Utilities/Search" 
import Footer from "../../Utilities/Footer"
import Header from "../../Utilities/Header"
import "./App.css"
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function App3() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'https://homify-server-test.vercel.app/login',{
          method:"post",
          body : JSON.stringify({ name, password }),
          headers: {
            'Content-Type': 'application/json'
          }
      }
    )
    result = await result.json();
    console.warn(result);
    console.log("Result data : "+result);
    if(result === "Success"){
      navigate("/")
    }else{
        navigate("/LoginPage")
        alert("Invalid username or password")

    }
  }

  return (
    <>
      <div id="login_container1">
        <div id="login_container2">
          <div className="flex_container">
            <img src="/Logo.jpg" height={30} width={30} className="image-container" id="logo_img"></img>
          </div>
          <br/><br/>
          <div className="flex_container">
            <h1 id="login_h1" className="login">Sign in to Homify</h1>
          </div>
          <br/>
          <div id="login_container4" className="login">
            <p>Username or email address</p>
            
            <input type="text" className="login_input" value={name} onChange={(e) => setName(e.target.value)}></input>
            
            <p>Password</p>
            
            <input type="password" className="login_input" onChange={(e) => setPassword(e.target.value)}></input>
            
            <a href="/"><button className="submit_button" onClick={handleSubmit}>Sign in</button></a>
          </div>
          <br/><br/>
          <div id="login_container5" className="flex_container">
            <p>New to Homify?</p> <a href="/CreateAccount">Create an account</a>
          </div>
        </div> 
      </div>
      <Footer/>
    </>
  )
}

export default App3
