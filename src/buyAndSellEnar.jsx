import React ,{useState,useContext} from 'react'
import Footer from "./footer";
import "./style/buyAndSell.css"
import {AuthContext}from "./context/authContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
const BuyEnar = () => {
    const [Enar ,setEnar] = useState(500)
     const [currency ,setCurrency] = useState("NGN")
      const [currencyAmount ,setCurrencyAmount] = useState(50)
        const {purchaseType}  = useContext(AuthContext)
        const {coin}  = useContext(AuthContext)
  return (
    <div>

        <div className='AdDe'>
            <div className="AdDe1 ">
                <div className="Tail">
                <div className="Tail1">Advertisement Details</div>
                <div className="Tail2">
                    <div className="Tail3">{purchaseType === "Buy" ? "Buying From" :"Selling To"}</div>
                    <div className="Tail4"> Kingsley Chukwubuike</div>
                </div>
                <div className='laiT'></div>
                <div className="Tail2">
                    <div  className="Tail3">Price</div>
                    <div className="Tail4" style={{color:purchaseType === "Buy" ? "#0cf10c" :"red"}}>1,282.70 {coin}/ENAR</div>
                    </div>
                 <div className='laiT'></div>
                
                  <div className="Tail2">
                    <div className="Tail3">Amount Limit</div>
                    <div className="Tail4">0.24USDT - 254.34USDT</div>
                </div>
                 <div className='laiT'></div>
                   <div className="Tail2">
                    <div className="Tail3">Payment Method</div>
                    <div className="Tail4">Bank Transfer</div>
                </div>
                 <div className='laiT'></div>
                   <div className="Tail2">
                    <div className="Tail3">Location</div>
                    <div  className="Tail4">Nigeria</div>
                </div>
                 <div className='laiT'></div>
                 <div className="Tail2">
                    <div className="Tail3">Payment Window</div>
                    <div className="Tail4">15 minutes</div>
                </div>

                </div>
            </div>
            <div className="AdDe2">
                
            </div>
            <div className="AdDe1">
                <div className='Tail pof'>
                <div className='pof1'>
                    <div style={{width:"49%"}}>
                        <form>
                            <div className="aoE">Amount of {coin}</div>
                            <input type=""  placeholder ="" className="sarem" value={currencyAmount}  onChange={(e)=>setCurrencyAmount(e.target.value)}/>
                        </form>
                    </div>
                     <div style={{width:"49%"}}>
                         <form>
                            <div className="aoE">Amount of ENAR</div>
                            <input type=""  placeholder ="" className="sarem" value={Enar} onChange={(e)=>setEnar(e.target.value)}/>
                        </form>
                     </div>
                </div>
                <div className="clickBoxd">
                    <input type="checkbox" />
                    <label  className="clickBoxd1">By clicking Continue, you agree to Earnars P2P Terms of Service</label>
                </div>
                <div className="clickBoxd2" style={{color:purchaseType === "Buy" ? "#0cf10c" :"red"}}>{purchaseType} ENAR</div>
                </div>
            </div>
        </div>

                 <div style={{padding:"0 10px"}}>
          <div id="Faqc" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear" style={{color:"#fff"}}>FAQ</div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop}>
                <span>I have never traded the forex or crypto market before. How do I Start?</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                  <div>
                    <div className="Qac"></div>
                <p className="ILOVEK">
                  {" "}
                  To start trading the forex or cryptocurrency market all you need to know is to understand the basics of trading like, how to Buy/Sell, How to set Stoploss and Takeprofit, How to spot support and Resistance. With this basic knowledge you can follow our Tipsters expert forecast and achieve success in the market.{" "}
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop1}>
                <span>I don't know how to bet on sports. How do I start?</span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 You don't need to understand much about sport betting to bet. Once you are registered with our recommended bookmaker, subscribe to any tipster membership and copy their coupon code to place your bet with the bookmaker specified by the tipster.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop2}>
                <span> I don't Have an account with any forex platform. Can I get any recommendations? </span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                Click the market button on the header and go through forex section to see recommended brokers
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop3}>
                <span> How much does it cost to subscribe monthly? </span>
                <span className="IconSpace">
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                Purchasing a membership Subscription from any tipster is flexible. You can either buy daily, weekly or monthly subscription
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <div className="homeChange">
              <div className="HowFarBro" onClick={drop4}>
                <span> How much does it cost to subscribe monthly? </span>
                <span className="IconSpace">
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                  It cost only $50 or ₦25,000 to subscribe monthly
                </p>
                </div>
              ) : (
                ""
              )}
            </div> */}
          
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop6}>
                <span> If my referral subscribes every month will I still get paid my referral commission? </span>
                <span className="IconSpace">
                  {show6? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show6 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                  Yes, you earn upto 75% commission on any user your refer to our plaform.e.g if Tola refers Emeka and Emeka subscribe to our yearly affiliate program, Tola will recieve 75%( ₦7,500) and if it's a monthly subscription Tola will receive ₦750. if Emeka continue renewing his subscrption every mont or year Tola will keep earning his referral bonus for life.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop7}>
                <span>  Can i invest my money with your company so you trade & bet for me and pay me percentage monthly?</span>
                <span className="IconSpace">
                  {show7? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show7 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 We or our Tipsters do not accept or manage users trading/ betting funds, trade or bet for any user. We only forecast the forex, crypto, binary market & predicts games. Users are responsible for managing their money with any brokers or bookies of their choice.
                </p>
                </div>
              ) : (
                ""
              )}
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
    <Footer/>
    </div>
  )
}

export default BuyEnar;