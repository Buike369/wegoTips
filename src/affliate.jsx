import React ,{useContext} from "react";
import "./style/home.css"
import "./style/affiliate.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import Footer from "./footer";
import { Link} from "react-router-dom";
import { AuthContext } from './context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import {faFacebook,faTwitter,faLinkedin,faTelegram,faYoutube,}from '@fortawesome/free-brands-svg-icons'

const Affiliate =()=>{

 const {currentUser} = useContext(AuthContext);
     const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

    
    return(
        <div>
       

         <div >
            <div className="AffliateDiv34 AffDD">
                 <div className="affiliateImage" >
                    <div className="grace">
                        <h1 className="Aka">Affiliate</h1>
                        {/* <div><span className="homeSpan">Home</span> <span className="homeSpan">Affiliate program</span></div> */}
                       <p  className="weAre mainDe">We Are Excited to Share Our Revenue with you</p>
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
                <div className="InviteBI mainDe">
                    <div className="inviteFrs">
                        <p className="PInvite">invite</p>
                        <a href=""><FontAwesomeIcon icon={faFacebook} className="icon_brand_size bscY"/></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} className="icon_brand_size bscY" /></a>
                         <a href=""><FontAwesomeIcon icon={faLinkedin} className="icon_brand_size bscY" /></a>
                          <a href=""><FontAwesomeIcon icon={faTelegram} className="icon_brand_size bscY" /></a>
                    </div>
                </div>

                <div className="Rtme">
                    <p className="TheyAre">They are talking about us</p>
                     <div className="DonTake" style={{color: "#fff"}}>Don't Take Our Word For It.</div>
                    <p className="seeWhat">See what my customers have to say.Find out what our clients are saying below</p>
         {/* <div className="divUnder1"></div> */}
         <div className=" marginMu fadama ">
         <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive2}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
 <div style={{padding:"4px 10px"}}>      
<div className="earnSayPp">
  <p className="partnerShip">"Through Earnars partnership program I made 250k in just two weeks by referring 20friends to the platform."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Chukwubuike Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div> 
 <div style={{padding:"4px 10px"}}>           
<div className="earnSayPp">
  <p className="partnerShip">"I made Over 1 Million in Less Than 30 Days by just following Earnars.com prediction on Sports and Forex Trading.I would recommend earnars to any body any time."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka Ngozi</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
<div style={{padding:"4px 10px"}}>
<div className="earnSayPp">
  <p className="partnerShip">"Your company is truly upstanding and is behind its product 100%. Keep up the excellent work. Earnars is the most valuable prediction portal i have EVER come across. I love your system."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
         
          </Carousel>
        </div>

                </div>


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
                         <FontAwesomeIcon icon={faPaperPlane} className="EmailSentIcon" />
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

export default Affiliate;