import React,{useState,useEffect,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style/sportPage.css"
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import "./style/home.css";
import "./style/home2.css"
import Footer from "./footer"
import AOS from 'aos';
import { Link} from "react-router-dom";
import "./style/slide.css"
import background from "./img/sample.PNG";
import { AuthContext } from './context/authContext';

const CryptoPage = () => {
  const {currentUser} = useContext(AuthContext);


    const [show,setShow]= useState(false)
    const [show1,setShow1]= useState(false)
    const [show2,setShow2]= useState(false)
    const [show3,setShow3]= useState(false)
    const [show4,setShow4]= useState(false)
    const [show5,setShow5]= useState(false)
    const [show6,setShow6]= useState(false)


    const drop =()=>{
       setShow(!show)
       setShow1(false)
       setShow2(false)
       setShow3(false)
       setShow4(false)
       setShow5(false)
    }

    const drop1 =()=>{
      setShow(false)
       setShow1(!show1)
       setShow2(false)
       setShow3(false)
       setShow4(false)
       setShow5(false)
    }

    const drop2 =()=>{
      setShow(false)
       setShow1(false)
       setShow2(!show2)
       setShow3(false)
       setShow4(false)
       setShow5(false)
    }

    const drop3 =()=>{
      setShow(false)
       setShow1(false)
       setShow2(false)
       setShow3(!show3)
       setShow4(false)
       setShow5(false)
    }

    const drop4 =()=>{
      setShow(false)
       setShow1(false)
       setShow2(false)
       setShow3(false)
       setShow4(!show4)
       setShow5(false)
    }

    const drop5 =()=>{
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
    <div style={{ backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"
}} >
        <div className="sportPa">
          <div>
          <img src="/img/earnarsbanner23.png" className="AffliateBanner" alt=""/>
          </div>
        <div className="MakingMoney">
        Making Money Daily on <span className="forexy">CRYPTOCURRENCY</span> trading is as easy as following our daily expert predictions
        </div>
        {currentUser ? " " :  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Link to="/login" className="ifi"> <button className="NowUpSign" >SIGN UP NOW</button></Link> </div>}  
      {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Link to="/login" className="ifi"> <button className="NowUpSign" >SIGN UP NOW</button></Link> </div> */}
        <div style={{padding:"0px 12px"}} >
        <p className="SportBetting">What Is Cryptocurrency Trading</p>
        <div className="outcomeBeen1">
        <div className="outcomeBeen" style={{ 
      backgroundImage: `url(${background})`,backgroundPosition:"left right bottom top",backgroundRepeat:"no-repeat",padding:"18px 15px",backgroundSize:"cover"}}>
        <span className="forexy1">   Cryptocurrency </span>trading happens when you buy or sell digital 
currencies with the aim of making a profit when their is change in value 
of the underlying asset. There are two main ways to trade 
cryptocurrency online: through a specialized brokerage or via a 
dedicated cryptocurrency exchange.  
        </div>
        </div>
        </div>
        <div  style={{padding:"0px 12px"}}>
        <p className="WhyStart">Why Start  Cryptocurreny Trading</p>
        <div className="ifNi"></div>
        <div className="EasyTi">
            <div className="EasyTim" style={{ 
     background: "linear-gradient(206deg, rgb(51 50 85) 31%, rgb(50 49 90 / 54%) 62%, rgb(53 56 92 / 44%) 76%)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">High Volatility</p>
                </div>
                <div className="everyDay">
                Cryptocurrencies volatility is 
part of what makes this market
so exciting. Rapid intraday 
price movements can provide a 
range of opportunities to 
traders to go long and short 
but also come with increased 
risk. So, if you decide to 
explore the cryptocurrency 
market, make sure that you have 
done your research and developed 
a risk management strategy.</div>
            </div>
            <div className="EasyTim" style={{ 
  background: "linear-gradient(206deg, rgb(51 50 85) 31%, rgb(50 49 90 / 54%) 62%, rgb(53 56 92 / 44%) 76%)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">A 24-Hours Market</p>
                </div>
                <div className="everyDay">There is no waiting for the 
opening bell. From the 
Monday morning to Sunday and year to year the market is open and available world wide for trading.
This is 
awesome for those who 
want to trade on a part-time 
basis because you can 
choose when you want to 
trade: morning, noon, night,
 during breakfast, or in your 
sleep.

</div>
            </div>
            <div className="EasyTim" style={{ 
     background: "linear-gradient(206deg, rgb(51 50 85) 31%, rgb(50 49 90 / 54%) 62%, rgb(53 56 92 / 44%) 76%)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">Low Barriers To Entry</p>
                </div>
                <div className="everyDay">Getting Started with crypto 
trading has one of the
 lowest barrier of entry. This 
means it wont cost you time 
and a tone of money to start 
trading cyrpto. With
$10 dollars you can register 
an account with an exchange and start trading. There are several high powered 
knowledge available online 
to get you started. 
We are here to help you start 
making money online by just 
following our expert prediction.</div>
            </div>
        </div>
        </div>

        <div className="AgenciesTy">What Are Cryptocurrency Exchanges</div>
        <div className="ifNi"></div>
        <p className="everyDay Dayword">Crypto exchange is a platform on which you can buy and sell 
cryptocurrencies. You can also use exchanges to trade one crypto 
for another
</p>
      


<div className="slider">
<div className="slide-track">
   <div className="slide">
    <div style={{height:"80px",width:"180px"}}>
    <img src="/img/binance.webp" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
      </div>
    </div>
     <div className="slide">
          <div style={{height:"80px",width:"180px"}}>
   <img src="/img/coinbase.png" alt="" title="" className="marqueelogo" style={{width:"100%",  height:"100%"}}/>
   </div>
    </div>
    <div className="slide">
      <div style={{height:"80px",width:"180px"}}>
   <img src="/img/biti.jpg" alt="" title="" className="marqueelogo" style={{width: "100%",  height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
       <div style={{height:"80px",width:"180px"}}>
    <img src="/img/BYbit.png" alt="" title="" className="marqueelogo" style={{width: "100%",  height:"100%"}}/>
   </div>
   </div>
    <div className="slide">
       <div style={{height:"80px",width:"180px"}}>
   <img src="/img/kucoin.png" alt="" title="" className="marqueelogo" style={{width: "100%",  height:"100%"}}/>
   </div>
   </div>
    <div className="slide">
      <div style={{height:"80px",width:"180px"}}>
   <img src="/img/hfm.svg" alt="" title="" className="marqueelogo" style={{width: "100%",  height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
        <div style={{height:"80px",width:"180px"}}>
   <img src="/img/binance.webp" alt="" title="" className="marqueelogo" style={{width: "100%",  height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
         <div style={{height:"80px",width:"180px"}}>
           <img src="/img/coinbase.png" alt="" title="" className="marqueelogo" style={{width: "100%",  height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
        <div style={{height:"80px",width:"180px"}}>
   <img src="/img/biti.jpg" alt="" title="" className="marqueelogo" style={{width: "100%",  height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
        <div style={{height:"80px",width:"180px"}}>
   <img src="/img/BYbit.png" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
         <div style={{height:"80px",width:"180px"}}>
         <img src="/img/kucoin.png" alt="" title="" className="marqueelogo" style={{width: "100%",  height:"100%"}}/>
  </div>
   </div>
       <div className="slide">
                 <div style={{height:"80px",width:"180px"}}>
   <img src="/img/hfm.svg" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
   </div>
   </div>
 
</div>
</div>



        <div className="BettingTu">Crypto Trading Tutorial Videos</div>
        <div className="figma rengma">
        <div className="firey fora rengma2">
            <div className="firey1 rengma1">
            <iframe className ="pn" width="100%" height="100%" src="https://www.youtube.com/embed/0UTzqjCbPsQ" title="Binance Futures: The Step By Step Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1 rengma1">
            <iframe className="pn"  width="100%" height="100%" src="https://www.youtube.com/embed/Rb2wYoFHWEY" title="Section 1 - How to Register an Account" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1 rengma1">
            <iframe  className="pn" width="100%" height="100%" src="https://www.youtube.com/embed/he3W11XtCGo" title="Section 2 - How to Verify your Account" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1 rengma1">
            <iframe className="pn" width="100%" height="100%" src="https://www.youtube.com/embed/HWSyqAOi3s0" title="Section 3 - How to Deposit Funds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1 rengma1">
            <iframe className="pn"  width="100%" height="100%" src="https://www.youtube.com/embed/C-Lso4v0Rew" title="Beginner&#39;s guide to trading on Binance Spot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1 rengma1">
            <iframe className="pn" width="100%" height="100%" src="https://www.youtube.com/embed/BUjRz9SS3LY" title="Section 6 - How to Withdraw Funds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </div>
        </div>

        {/* <div className="firey">
            <div className="firey1">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BUjRz9SS3LY" title="Section 6 - How to Withdraw Funds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/C-Lso4v0Rew" title="Beginner&#39;s guide to trading on Binance Spot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/he3W11XtCGo" title="Section 2 - How to Verify your Account" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div> */}

        <div>
          <div id="Faqc" className="faqSportMa" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom faqSports" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">FAQ</div>
            <div>
              <div className="HowFarBro" onClick={drop}>
                <span>How do resgister  with an Exchange?</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                <p className="ILOVEK">
                  {" "}
                  To register with a Crypto Exchange,visit any Exchange of your choice and click on their signup button to register with them. You can register with more than one cryptocurrency exchange.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={drop1}>
                <span>I dont Know anything about crypto trading,What should i do?</span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
                 Not knowing about Crypto Trading doesn't stops you from making money from Crypto Market. All you need to know is  how to buy/sell using our expert forecast daily. Watch our tutorial video on how to Buy/Sell to give you the required knowledge you need to start trading immediately.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={drop2}>
                <span>How can i fund my account? </span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <p className="ILOVEK">
                 To fund your account on earnars.com after registration, go to "My Wallet" section and click on deposit and enter the amount you want to fund your account with, This will redirect you to flutter wave secure payment channel that gives you various payment options. To fund your account with an exchange watch the tutorial video.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={drop3}>
                <span> Can your company Trade for me and pay me a percentage monthly? </span>
                <span className="IconSpace">
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <p className="ILOVEK">
                We do not manage users funds or trade for any user, we only forecast wining trades. Users are responsible for  any amount of money they wish to stake with the trading platform they are registered with.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={drop4}>
                <span> How much do i stake in every trade? </span>
                <span className="IconSpace">
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <p className="ILOVEK">
                  Your are responsible for any amount you wish to stake on any trading portal but we advice users to risk between 1% to 5% of their capital on any trade forecasted.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={drop5}>
                <span> What is the guarantee am going to make money trading Crypto?</span>
                <span className="IconSpace">
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <p className="ILOVEK">
                 We do not guarantee any trade forecast made by our experts, however we guarantee the refund of users subscription fees if at the end of any particular month they don't turn profit by following all our prediction. This refund policy is subject to our "Refund Policy Terms and Condition"
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
             
           
            </div>
          </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default CryptoPage