import React,{useState} from 'react'
import logo from './assets/images/PAATSHALA.png'
import googlelogo from './assets/images/Google.png'
import facebooklogo from './assets/images/facebook.png'
import Login from './screens/Login';
import './App.css'
import app,{googleprovider,facebookprovider} from './firebase1.js'
function Home() {
  const [isuserloggenin, setisuserloggenin]=useState(false)
  const[useremaid,setuseremail]=useState('')
  const[username,setusername]=useState('')
  const[userphoto,setuserphoto]=useState('')
  const googleloginfunc=()=>{
   
    app.auth().signInWithPopup(googleprovider).then(function(result) {
      console.log(result.user)
      console.log(result.user.displayName)
      console.log(result.user.email)
      console.log(result.user.photoURL)
      // ...additionalUserInfo.profile
      setusername(result.user.displayName)
      setuserphoto(result.user.photoURL)
      setisuserloggenin(true)
    }).catch(function(error) {
     console.log(error)
    });
  }
  const facebookloginfunc=()=>{
    app.auth().signInWithPopup(facebookprovider).then(function(result) {
      console.log("Facebook Auth Successful")
      setisuserloggenin(true)
      setusername(result.user.displayName)
      setuseremail(result.user.email)
      setuserphoto(result.user.photoURL)
    console.log(result.user.displayName)
    
    }).catch(function(error) {
     console.log("Error")
      console.log(error)
      if(error.code=="auth/account-exists-with-different-credential"){
        alert("User with same email ID exists")
      }
      
    });
  }



  const usersignout=()=>{
    app.auth().signOut().then(function() {
      setisuserloggenin(false)
    }).catch(function(error) {
      alert("Some error occured")

    });
  }
    return (
        <div className="home">
            <div className="header">
        
        <img className="header_logo" src={logo}/>
      
      <div className="header_side">
      
          {isuserloggenin?
          <div className="header_side_loggedin">
          <p style={{paddingRight: "20px"}}>{username}</p>
          <img src={userphoto} className="userphoto"/>
          <div className="header_logoutdropdown">
            <button onClick={usersignout} className="header_signout_button">Sign out</button>
          </div>
          </div>
          
          
          :
          <div className="usernologgedin">
          <button className="header_side_button">Login</button>
          <div className="loginoptions">
            <button onClick={googleloginfunc} className="googlelogin_button">
              <img src={googlelogo} style={{width:"30px"}}/>
              <p style={{paddingLeft:"15px",fontSize:"15px"}}>Google Login</p>
            </button>
            <button onClick={facebookloginfunc} className="facebooklogin_button">
            <img src={facebooklogo} style={{width:"30px"}}/>
            <p  style={{paddingLeft:"15px",fontSize:"15px"}}>Facebook Login</p>
            </button>
          </div>
          </div>
          
          }
      </div>
    </div>
    <div className="middle_1">
      <h1 style={{textAlign:"center",marginBottom:"10px"}}>What is Paatshala?</h1>
      <h2 style={{marginBottom:"10px"}}>Virtual School or College where.</h2>
        <div className="middle_1_row">
        <div className="middle_1_row_1">
      <h2>Teachers Can</h2>
      
      <h3 className="middle_1_row_list">· Conduct classes</h3>
      <h3 className="middle_1_row_list">· Give assignments</h3>
      <h3 className="middle_1_row_list">· Chat with students and collegues</h3>
     
      </div>
      <div className="middle_1_row_2">
      <h2>Students Can</h2>
      <h3 className="middle_1_row_list">· Attend classes</h3>
      <h3 className="middle_1_row_list">· View and submit assignments</h3>
      <h3 className="middle_1_row_list">· Chat with mates and teachers</h3>
      
      </div>
      </div>
     </div>
     <div className="middle_2">
       <h1> Why Paatshala?</h1>
     </div>
    <div className="footer">
      <h1>This is footer</h1>
    </div>
        </div>
    )
}

export default Home
