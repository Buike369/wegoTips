import React from 'react'
import "./style/allTips.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer"
const AllTips = () => {
  return (
    <div>
        <div className='tipsWa'>
        <div className='allTipsHeader'>
            <div className='allTipsHeader1'>
                <div className='allTipsHeader5'>
         <p className='allTipsHeader4'>All Tips</p>
         </div>
         <p></p>
            </div>
            <div className='allTipsHeader3'>
                <img src="/img/allBanner.png" alt="" className='allTipsHeader2'/>
            </div>
        </div>
        <div className='apple'></div>
         <div className='apple1'></div>
           <div className='apple2'></div>
            <div className='apple3'></div>
               <div className='apple4'></div>
        </div>

        <div>

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

export default AllTips