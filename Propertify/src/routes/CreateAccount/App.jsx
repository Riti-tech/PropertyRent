import BackgroundImage from "../Homepage/BackgroundImage"
import Search from "../../Utilities/Search" 
import Footer from "../../Utilities/Footer"
import Header from "../../Utilities/Header"
import "./App.css"
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


function App4() {

  const navigateTo = useNavigate();
  const [name, setName] = useState("");
	const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'https://homify-server-test.vercel.app/register', {
			method: "post",
			body: JSON.stringify({ name, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
    console.log('JSON: ',result.json)
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setPassword("");
      setConfirmPassword("");
			setName("");
      navigateTo('/LoginPage')
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
            <h1 id="login_h1" className="login">Create Account</h1>
          </div>
          <br/>
          <div id="login_container4" className="login">
            <p>Username or email address</p>
            
            <input type="text" className="login_input" value={name} onChange={(e) => setName(e.target.value)} ></input>
            
            <p>Password</p>
            
            <input type="password" className="login_input" value={password} onChange={(e) => setPassword(e.target.value)}></input>

            <p>Confirm password</p>
            
            <input type="password" className="login_input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            
            <a href="/LoginPage"><button id="submit_button" onClick={handleOnSubmit}>Sign up</button></a>
          </div>
          <br/><br/>
        </div> 
      </div>
      <Footer/>
    </>
  )
}

export default App4
