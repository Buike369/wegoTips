import React ,{useContext} from "react";
import "./style/home.css"
import "./style/affiliate.css"
import Footer from "./footer";
import { Link} from "react-router-dom";
import { AuthContext } from './context/authContext';

const Affliate =()=>{

    const {currentUser} = useContext(AuthContext);
    return(
        <div>
       

         <div >
            <div className="AffliateDiv34 AffDD">
                 <div className="affiliateImage" >
                    <div className="grace">
                        <h1 className="Aka">Affiliate</h1>
                        {/* <div><span className="homeSpan">Home</span> <span className="homeSpan">Affiliate program</span></div> */}
                       <p  className="weAre">We Are Excited to Share Our Revenue with you</p>
                    </div>
                     <div className="grace"><img src="/img/affiliate-banner.png" className="gracePic" alt="affiliate_banner"/></div>
                     <img src="/img/StarsME.svg" className="headerAffiliateI" alt="affiliate_banner"/>
                      <img src="/img/StarsME.svg" className="headerAffiliate2" alt="affiliate_banner"/>
                 </div>
                 </div>
                
             <div className="earnPMN">
                <div className="inviteFr">Get $20 - Invite Your Friends to Earnars</div>


                {/* <Link to="/login" className="ifi"> <div className="NowUpSign">Watch Now</div></Link> */}
                 {/* {currentUser? "": <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Link to="/login" className="ifi"> <button className="NowUpSign" >Watch Now</button></Link> </div> }  */}
               <div className="SimpleLet">It's easy and Simple .Lets get started with the following Steps.</div>

               <div className="Create_account_holder_Div">
                   <div className="who">
                       <div className="Create_account_Div"><img src="/img/login.png" className="Create_account_Div1"  alt="pics"/>
                       <p className="AccountPTag">1</p></div>
                       <div className="Create_AccountD">Create Account</div>
                   </div>
                   <div className="who">
                   <div className="Create_account_Div"><img src="/img/login2.png" className="Create_account_Div1"  alt="pics"/>
                   <p className="AccountPTag">2</p>
                   </div>
                       <div className="Create_AccountD">Invite Your friends</div>
                   </div>
                   <div className="who">
                   <div className="Create_account_Div"><img src="/img/login3.png" className="Create_account_Div1" alt="pics"/>
                   <p className="AccountPTag">3</p></div>
                       <div className="Create_AccountD">Start Earning</div>
                   </div>
               </div>


</div>

              <div className="bkFR">
               <div style={{padding:"0 10px"}}>
                <div className="MessageDivCov">
               <div className="Package_Up">
                   <h1 className="alap">Don't miss out on Fantastic News</h1>
                   <p className="Each_Time_your">
                       Subscribe to our newsletter and be the first to receive news.
                   </p>
                   <form>
                    <div className="newsInput">
                        <input type="email" placeholder="Enter Your Email"  className="newsBro"/>
                    </div>
                   </form>
                   <img src="/img/news.svg" alt=""  className="messageImg"/>
               </div>
               <img src="/img/undrawWorld1.svg" alt="" className="papag" />
                <img src="/img/undrawWorld1.svg" alt="" className="papag1" />
               
               </div>
               </div>
               </div>

     
             


               


         </div>


        <Footer/>

        </div>
    )
}

export default Affliate;