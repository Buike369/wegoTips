import React ,{useContext} from "react";
import "./style/home.css"
import "./style/affiliate.css"
import Footer from "./footer";
import { Link} from "react-router-dom";
import { AuthContext } from './context/authContext';

const Affliate =()=>{

    const {currentUser} = useContext(AuthContext);
    return(
        <div style={{ backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"
}}  >
       

         <div className="AffliateDiv34">
                 <div >
                     <img src="/img/EarnarsAffliateBanner.png" className="AffliateBanner" alt="affiliate_banner"/>
                 </div>
                
               <div className="ExcitedShare">
                  We Are Excited to Share Our Revenue with you
               </div>
               <div className="EarnNaira">Earn $25 dollars or ₦12,500 Naira per referral</div>

                {/* <Link to="/login" className="ifi"> <div className="NowUpSign">Watch Now</div></Link> */}
                 {currentUser? "": <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Link to="/login" className="ifi"> <button className="NowUpSign" >Watch Now</button></Link> </div> } 
               <div className="SimpleLet">Its easy and Simple .Lets get started with the following Steps.</div>

               <div className="Create_account_holder_Div">
                   <div className="who">
                       <div className="Create_account_Div"><img src="/img/create.png" className="Create_account_Div1"  alt="pics"/>
                       <p className="AccountPTag">1</p></div>
                       <div className="Create_AccountD">Create Account</div>
                   </div>
                   <div className="who">
                   <div className="Create_account_Div"><img src="/img/invite.jpg" className="Create_account_Div1"  alt="pics"/>
                   <p className="AccountPTag">2</p>
                   </div>
                       <div className="Create_AccountD">Invite Your friends</div>
                   </div>
                   <div className="who">
                   <div className="Create_account_Div"><img src="/img/earn.png" className="Create_account_Div1" alt="pics"/>
                   <p className="AccountPTag">3</p></div>
                       <div className="Create_AccountD">Start Earning</div>
                   </div>
               </div>


               <div className="Your_Earning_never_Stop">
                   Your Earnings Never Stops
               </div>
               <div style={{padding:"0 10px"}}>
               <div className="Package_Up">
                   <p className="Each_Time_your">Each time your referral subscribe to  our premium package you earn 50% of the amount paid.</p>
                   <p className="Each_Time_your">
                       Withdrawals of Earnings Are instant and paid directly to your bank account.
                   </p>
               </div>
               </div>

     {currentUser? <a href="/profile" className="ifi"><div className="NowUpSign">  Start Now</div></a>:
     <a href="/register" className="ifi"><div className="NowUpSign">  Start Now</div></a>}
             


               


         </div>


        <Footer/>

        </div>
    )
}

export default Affliate;