import React,{useState,useContext,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style/sportPage.css"
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import "./style/home.css";
import "./style/home2.css"
import AOS from 'aos';
import "./style/sportsP.css"
import { Link} from "react-router-dom";
import Footer from "./footer"
import "./style/slide.css"
import { AuthContext } from './context/authContext';
import background from "./img/sample.PNG";

const SportsPage = () => {


    const [show,setShow]= useState(false)
    const [show1,setShow1]= useState(false)
    const [show2,setShow2]= useState(false)
    const [show3,setShow3]= useState(false)
    const [show4,setShow4]= useState(false)
    const [show5,setShow5]= useState(false)

    const {currentUser} = useContext(AuthContext);

    const drup =()=>{
      setShow(!show)
      setShow1(false)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(false)
     
    }
    const drup1 =()=>{

      setShow(false)
      setShow1(!show1)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(false)

    }
    const drup2 =()=>{
     
      setShow(false)
      setShow1(false)
      setShow2(!show2)
      setShow3(false)
      setShow4(false)
      setShow5(false)
    }
    const drup3 =()=>{
       
      setShow(false)
      setShow1(false)
      setShow2(false)
      setShow3(!show3)
      setShow4(false)
      setShow5(false)
    }
    const drup4 =()=>{
    
      setShow(false)
      setShow1(false)
      setShow2(false)
      setShow3(false)
      setShow4(!show4)
      setShow5(false)
    }
    const drup5 =()=>{

      setShow(false)
      setShow1(false)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(!show5)
    }

   useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div style={{backgroundColor:"#0f0b34"}}>
        <div className="sportPa">
        <div>
          <img src="/img/earnarsBanner34.png" className="AffliateBanner" alt=""/>
          </div>
        <div className="MakingMoney">
        Making Money Daily on <span className="forexy">SPORTS</span> trading is as easy as following our daily expert predictions
        </div>
        
        {/* <Link to="/login" className="ifi"><div className="NowUpSign">  SIGN UP NOW</div></Link> */}
        {currentUser ? " " :  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Link to="/login" className="ifi"> <button className="NowUpSign" >SIGN UP NOW</button></Link> </div>}  
        <div style={{padding:"0px 12px"}}>
        <p className="SportBetting">What Is Sports Betting</p>
        <div className="outcomeBeen1">
        <div className="outcomeBeen" >
        <span className="forexy1"> Sports </span>betting is the activity of predicting sports results and placing a wager on the outcome.  <span className="forexy1">Sport </span>betting is legally recognized across the world and has actually been an alternative source of income for millions of sport fans across the world.  
        </div>
        </div>
        </div>
        <div style={{padding:"0px 12px"}}>
        <p className="WhyStart">Why Start Sport Betting</p>
        <div className="ifNi"></div>
        <div className="EasyTi" >
            <div className="EasyTim" style={{ 
      background: "rgb(51, 50, 85)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">Easy to Get Started</p>
                </div>
                <div className="everyDay">
                A lot of money making 
sites require you to follow specific rules and may even require you to have high level skills or go through 
regorious learning to get 
started. This may lead to 
challenges if your schedule is too tight  or you lack 
the resources. The good 
thing with sports betting is 
that you won’t need any tool 
or financial commitment 
before you begin staking.
With $1 dollar or ₦500 naira you can start staking. You also have the chance to bet with the same amount from time to time.</div>
            </div>
            <div className="EasyTim" style={{ 
      background: "rgb(51, 50, 85)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">Alternative Source of Income</p>
                </div>
                <div className="everyDay">Betting comes with the oppurtunity to make money when some cash is involved. Any amount you have can earn you some profit as long as you bet on wining games or follow our recommended wining games. Some people even quit their jobs to concentrate fully on betting as a means of their survival. when you structure your betting system with proper risk reward ratio you will definitely make a fortune from it.

</div>
            </div>
            <div className="EasyTim" style={{ 
      background: "rgb(51, 50, 85)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
              <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">Convinience & Non Stop</p>
                </div>
                <div className="everyDay">Most games can’t be played
every day, maybe because 
they are too expensive or 
they are too tiring as such 
you cannot play them every 
day. But with sports betting, it is an affordable hobby that you can play or watch and enjoy every day. The sport betting industry never go to sleep,it functions 24hour a day and 365 days a year. 
You can also enjoy sports betting anywhere and anytime e.g from the comfort of your home or at any betting shop near you.</div>
            </div>
        </div>
        </div>

        <div className="AgenciesTy">Sports Betting Agencies</div>
        <div className="ifNi"></div>
        <p className="everyDay Dayok Dayword">Any company that is providing sports betting services can be called a bookmaker, betting agency,sportsbook or bookie.</p>
      


       

<div className="slider">
   <div className="slide-track">
    <div className="slide">
          <div style={{height:"80px",width:"180px"}}>
   <img src="/img/images.jpg" alt="" title="" className="marqueelogo" style={{width: "160px",height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
     <div style={{height:"80px",width:"180px"}}>
   <img src="/img/bett.svg" alt="" title="" className="marqueelogo" style={{width: "160px",height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
     <div style={{height:"80px",width:"180px"}}>
   <img src="/img/Betway.png" alt="" title="" className="marqueelogo" style={{width: "160px",height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
     <div style={{height:"80px",width:"180px"}}>
   <img src="/img/kingK.png" alt="" title="" className="marqueelogo" style={{width: "110px", height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
    <div style={{height:"80px",width:"180px"}}>
   <img src="/img/betKing.svg" alt="" title="" className="marqueelogo" style={{width: "160px", height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
    <div style={{height:"80px",width:"180px"}}>
   <img src="/img/images.jpg" alt="" title="" className="marqueelogo" style={{width: "160px",height:"100%"}}/>
   </div>
   </div>
    <div className="slide">
      <div style={{height:"80px",width:"180px"}}>
   <img src="/img/Betway.png" alt="" title="" className="marqueelogo" style={{width: "160px",height:"100%"}}/>
   </div>
   </div>
   <div  className="slide">
     <div style={{height:"80px",width:"180px"}}>
   <img src="/img/bett.svg" alt="" title="" className="marqueelogo" style={{width: "160px", height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
        <div style={{height:"80px",width:"180px"}}>
   <img src="/img/images.jpg" alt="" title="" className="marqueelogo" style={{width: "160px",height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
    <div style={{height:"80px",width:"180px"}}>
   <img src="/img/kingK.png" alt="" title="" className="marqueelogo" style={{width: "110px", height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
    <div style={{height:"80px",width:"180px"}}>
   <img src="/img/betKing.svg" alt="" title="" className="marqueelogo" style={{width: "160px", height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
    <div style={{height:"80px",width:"180px"}}>
   <img src="/img/images.jpg" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
   </div>
   </div>
   </div>
</div>






        <div className="BettingTu">Sport Betting Tutorial Videos</div>
        <div className='figma'>
        <div className="firey how">
            <div className="firey1">
            <iframe className="pn"  width="100%" height="100%" src="https://www.youtube.com/embed/QLfYPHSCATU" title="SPORTYBET TUTORIAL: HOW TO SIGN UP AND LOGIN TO YOUR SPORTYBET ACCOUNT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1">
            <iframe className="pn"  width="100%" height="100%" src="https://www.youtube.com/embed/mgXNWBDOD8w" title="SPORTYBET TUTORIAL: HOW TO DEPOSIT AND WITHDRAW MONEY FROM YOUR SPORTYBET ACCOUNT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1">
            <iframe className="pn"  width="100%" height="100%" src="https://www.youtube.com/embed/38TXXWrUrdQ" title="Sportybet Tips - How To Place Bets On Sportybet | Bet unlocked" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        </div>

        <div>
          <div id="Faqc" className="faqSportMa" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear" >
            <div className="firstTom faqSports" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">FAQ</div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drup}>
                <span>How do I register  with a broker?</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                <p className="ILOVEK">
               To register with a sports betting broker,visit any sports bookmarker of your choice and click on their signup button to register with them. You can register
with more than one broker.
                </p>
              ) : (
                ""
              )}
            </div>
            <div  className="homeChange">
              <div className="HowFarBro" onClick={drup1}>
                <span>I dont Know anything about betting,What should I do?</span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
               Not knowing about sports bettng doesn't stops you from making money from sports betting. All you need to know is how to place bet using our coupon code for each prediction we make. Watch our tutorial video on how to bet to give you the required knowledge you need to place a bet.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drup2}>
                <span> How can I fund my account?</span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <p className="ILOVEK">
                 To fund your account on earnars.com after registeration, go to "My Wallet" section and click on deposit and enter the amount you want to fund your account with, This will redirect you to flutter wave secure payment channel that gives you various payment options. To fund your account with a sport betting book maker watch the tutorial video.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drup3}>
                <span> Can your company bet for me and pay me percentage monthly? </span>
                <span className="IconSpace">
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <p className="ILOVEK">
              
We do not manage users funds or bet for any user, we only forecast/predicts games. Users are responsible for  any amount of money they wish to stake with the bookies they register with.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drup4}>
                <span>How much do I bet in every game?</span>
                <span className="IconSpace">
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <p className="ILOVEK">
                 Your are responsible for any amount you wish to bet on any bookmaker portal but we advice users to risk between 1% to 5% of their capital on any game.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drup5}>
                <span> What is the guarantee am going to make money betting?</span>
                <span className="IconSpace">
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <p className="ILOVEK">
              We do not guarantee any prediction made by our experts, however we guarantee the refund of users subscription fees if at the end of any particular month they dont turn profit by following all our prediction. This refund policy is subject to our "Refund Policy Terms and Condition"
                </p>
              ) : (
                ""
              )}
            </div>
          
          </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default SportsPage