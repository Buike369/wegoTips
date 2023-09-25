import React, {useState,useContext,useEffect} from 'react'
import "./style/home2.css"
import "./style/mobileheader.css"
import "./style/home.css";
import { Link} from "react-router-dom";
import axios from "axios"
import { AuthContext } from './context/authContext';

const Navbar= () => {

    const [register,setRegister] = useState(false)
    const [feedBack,setFeedBack]=useState("")
    const {currentUser,logout,isPaid} = useContext(AuthContext);
    const tr = window.location.pathname;

     setTimeout(() => {
            setRegister() 
              }, 5000);
 

    //            useEffect(()=>{
    //   const getSubscriptionPay = async()=>{
    //     try{
    //     await axios.get(`/user/subscription-pay/${currentUser.id}`)
    //     }catch(err){
    //       console.log(err)
    //     }
        
    //   }


    //    getSubscriptionPay()

    //  })

    
const locationBy = ( (tr === "/register") || (tr === "/login") || (tr === "/forgotpassword"))

     const scrollF =()=>{
          if(document.body.scrollTop > 140 || document.documentElement.scrollTop > 140){
            setFeedBack('Sapap60')
          }else{
            setFeedBack(' ')
          }
      }
    window.onscroll =()=>{
        scrollF()
      }
    

  return (
    <div>
    <div >
      {tr === "/dashboard" ? "":
        <div className={`"Header_Div_New_Bg"  ${feedBack}`} style={{borderBottom:tr ==="/register" || tr ==="/login"  ? "1px solid #312d72":""}}>
          {/* <div style={{color:"#fff",textAlign:'center'}}> Please be patient, as some of our pages are undergoing updates for improved functionality.</div> */}
          <div >
          <div className="header">
            <div >
              
                <a href="/" >
                  <img src="/img/Earnars1@72x1.png" className="imghy"/>
                </a>
              
            </div>
             {locationBy ? " " :<>
            <div>
              <ul className="header_list">
                <li className="Prediction_dropDown">
                  <a href="">Markets</a>
                  <div className="OverTime_View">
                    <div className="DoubleChancert">
                      <a className="cover_Div"></a>
                      <a href="/sport">Sports</a>
                      <a href="/forex">Forex</a>
                      <a href="/cryptocurrency">Cryptocurrency </a>
                      <a href="/binary">Binary</a> 
                    
                    </div>
                  </div>
                </li>
                 <li className="Prediction_dropDown">
                  <a href="">Tipster</a>
                  <div className="OverTime_View">
                    <div className="DoubleChancert">
                      <a className="cover_Div"></a>
                      <a href="/become-tipster">Become a Tipster</a>
                      <a href="/find-tipster">Find a Tipster</a>
                      <a href="/allTips">All Tips </a>
                      
                    
                    </div>
                  </div>
                </li>
               
                <li className="Premium_Bet">
                  <a href="/premium">Premium Prediction</a>
                
                </li>
                <li className="Affliate_Bet">
                  <a href="/affliate">Affiliate Program</a>
                </li>
                <li className="Contact_Bet">
                  <a href="/betcalculator"> Bet Calculator</a>
                </li>
                {/* <li className="Contact_Bet vap">
                  {tr === "/" ?<a href="#Faqc">FAQ</a> :null}
                  
                </li> */}
                {/* <li className="FAQ_Bet">
                  <a href="#Faqc">FAQ</a>
                </li> */}
              </ul>
            </div>

            <div>
              {currentUser ? (
              <div>
              <ul>
                <li className="pauling">
                  <a style={{padding:"5px 5px",background:"#6975a2"}}>{currentUser ?"Login":""}</a>
                  <ul className="paulFr">
                      <li className="padup_Guide"></li>
                      <li className="paulmy_man">{currentUser?.username} </li>
                      <li className="Email_Like"><div className="Email_Like2">{currentUser?.email}</div></li>
                      <li className="paulmy_man">ID:00000{currentUser?.id}</li>
                      <a href="/wallet" className="FeedDiv"><li className="LogOutDiv_UN">My Wallet</li></a>
                      <a href="/profile" className="FeedDiv"><li className="LogOutDiv_UN">My Profile</li></a>
                      {isPaid === 1? <a href="/tip" className="FeedDiv"><li className="LogOutDiv_UN">My Tips(Premium)</li></a> :<div onClick={()=>setRegister(!register)} className="FeedDiv" ><li className="LogOutDiv_UN">My Tips(Subscribe)</li></div>}
                     
                     
                      {currentUser?  <Link to="" className="FeedDiv"><li className="LogOutDiv_UN AMKING" onClick={logout}>Logout</li></Link>:""}
                     
                  </ul>
                </li>
              </ul>
            </div>
              ) : (

                <Link to="/register">
                <button className="Login">Login/Register</button>
              </Link>
               
              )}
            </div>
  </>
              }
          </div>
          </div>
        </div>
        }


         {register ? <div style={{position:'absolute',top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"red",zIndex:"500",fontSize:"20px",padding:"5px 10px",backgroundColor:"#fff"}}> Please subscribe to unlock</div>:""}
        {/* <div style={{position:'absolute',top:"400px",left:"50%",transform:"translate(-50%,-50%)",color:"red",zIndex:"500"}}> Please subscribe to unlock</div> */}
    </div>
    </div>
  )
}

export default Navbar;