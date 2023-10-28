import React,{useState,useContext} from 'react'
import "./style/exchange.css"
import Footer from "./footer";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {AuthContext}from "./context/authContext"

const Exchange = () => {
    const [process,setProcess] = useState("buy")
    // const [coin,setCoin] = useState("NGN")
    const TableData =["amaka","john","Stanley"]
     const navigate = useNavigate()
    const {purchaseType,setPurchaseType}  = useContext(AuthContext)
    const {coin,setCoin}  = useContext(AuthContext)



     const wentTo = ()=>{
       setPurchaseType("Sell")
       navigate('/buy-and-sell-enar')
         setCoin(coin)
     }
     const wentTo1 = ()=>{
       setPurchaseType("Buy")

       setCoin(coin)
       navigate('/buy-and-sell-enar')
     }
  return (
    <div>

<div className="Am1nAd">
<div className="Am1n">
    <div className="Am1n1">
         <div  className="nimni13 kate1">
            <p className="nimni2" >30k+ </p>
            <p className="nimni3">Total Locked</p>
        </div>
         <div  className="nimni12 kate1">
            <p className="nimni2" >2.2M+</p>
            <p className="nimni3">Market size</p>
        </div>
    </div>
    <div className="Am1n2"></div>
    <div className="Am1n1">
        <div  className="nimni kate1">
            <p className="nimni2" >2K</p>
            <p className="nimni3">Transaction</p>
        </div>
          <div  className="nimni1 kate1">
            <p className="nimni2" >22K+</p>
            <p className="nimni3">Awards</p>
        </div>
    </div>
</div>
<div className="Ena21">
    <div className='Ena1'>
        <div className='cncnc'>
            <div className="cncnc1">
                Exchange Wallet
            </div>
             <div className="cncnc2">
                <p className='cncnc3'>Total Asset value</p>
                <div className='cncnc34'> 107.45 <span className="remot"> enar</span> <span className="cccmn"> ~ $490.46</span></div>
             </div>
        </div>
        <div className="pode23">
            <div  className="pode pode2">Deposit</div>
             <div className="pode pode3">Withdraw</div>
              <div className="pode pode4">Transfer</div>
        </div>

    </div>
    <div  className='Ena1'>
        <p className="bbAs">Asset Balance</p>
        <div className="bbAs1"></div>
        <div className="bbAs2">
            <div className="earnarsCoin earnarsCoin1 ">ENAR</div>
             <div className="kikiay">107.65 <span className="cccmn"> ~ </span> <span className="cccmn">$490.83</span></div>
        </div>
          <div className=" bbAs2">
              <div className="earnarsCoin earnarsCoin2 ">USDT</div>
             <div className="kikiay">1700.65 <span className="cccmn"> ~ </span> <span className="cccmn">$1700.65</span></div>
          </div>
    </div>
</div>

</div>
<div className="popoUy">
<div className="detailInfo">
    <div className="buySELL">Buy and Sell ENAR</div>
    <div className=" dfdff">
        <div className="dfdff1 dfdff">
            <div className={process === "buy" ? "BuyEn BuyEn22" :"BuyEn"} onClick={()=>setProcess("buy")}>Buy</div>
            <div className={process === "sell" ? "BuyEn BuyEn20" :"BuyEn"} onClick={()=>setProcess("sell")}>Sell</div>
        </div>
        <div className="dfdff2">
            <div className='dfde1'>Click to select your coin</div>
            <div className="lifMm">
            <ul  className="dfdff22">
                <li  id="bk" className={coin ==="USDT" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("USDT")}>USDT</li>
                <li   id="bk1" className={coin ==="NGN" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("NGN")}>NGN</li>
                <li id="bk2" className={coin ==="GHS" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("GHS")}>GHS</li>
                <li id="bk3" className={coin ==="CFA" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("CFA")}>CFA</li>
                <li id="bk4" className={coin ==="ZAR" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("ZAR")}>ZAR</li>
            </ul>
            </div>
        </div>
    </div>
<div>
    {process === "buy" ?<>
      <div className="letsGo">

              
                
              <div className="UponT">
            
               

 {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}
          
           <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}}>
   
    <thead>
      <tr>
        <th style={{width:"140px"}}>Advertiser</th>
       
         <th style={{width:"180px"}}>Price/Limit Available</th>
        <th style={{width:"180px"}}>Payment</th>
        <th style={{width:"80px"}}>Action</th>
       
        
        
                
      </tr>
    </thead>
    <tbody>
       
       {TableData.map((app,id)=>(
      <tr  className="ADDTimeDbg ADDTimeDbg22" key={id}>
        <th className=" ADDTimeDbg">Paul Micheal</th>
        
          <td>
            <div>
                <div className="LLLM earnarsCoin1">1,305.45 <span className="LLLM2">{coin}</span>/<span className="LLLM1">ENAR</span></div>
                  <div className="LLLM">Maximum : 7000 <span className="LLLM1"> ENAR</span></div>
            </div>
            </td>
        <td>
            <div>
                <div className="LLLM">Access Bank</div>
                <div className="LLLM">Completion time ~ <span className="LLLM3"> 4m - 10m</span></div>
            </div>
            </td>
        <td><a  onClick={wentTo1}><div className="BuyNUME">Buy ENAR</div></a></td>
      
        
      </tr>
      ))}
   
  
       
    
  
        
      
   
     
    </tbody>
  </table>
</div>
</div>

    
 

                </div>

              
               </div>
               </> :""}
               {process === "sell" ?
               <div className="letsGo">

              
                
              <div className="UponT">
            
               

 {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}
          
           <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}}>
   
    <thead>
      <tr>
        <th style={{width:"140px"}}>Advertiser</th>
       
         <th style={{width:"180px"}}>Price/Limit Available</th>
        <th style={{width:"180px"}}>Payment</th>
        <th style={{width:"80px"}}>Action</th>
       
        
        
                
      </tr>
    </thead>
    <tbody>
       
       {TableData.map((app,id)=>(
      <tr  className="ADDTimeDbg ADDTimeDbg22" key={id}>
        <th className=" ADDTimeDbg">Mr Paul</th>
        
          <td>
            <div>
                <div className="LLLM bubuA">1,305.45 <span className="LLLM2">{coin}</span> / <span className="LLLM1 ">ENAR</span></div>
                  <div className="LLLM">Maximum : 7000 <span className="LLLM1 "> ENAR</span></div>
            </div>
            </td>
        <td>
            <div>
                <div className="LLLM">Access Bank</div>
                <div className="LLLM">Completion time ~ <span className="LLLM3"> 4m - 10m</span></div>
            </div>
            </td>
        <td><a  onClick={wentTo}><div className="BuyNUME BuyEn20">Sell ENAR</div></a></td>
      
        
      </tr>
      ))}
   
  
       
    
  
        
      
   
     
    </tbody>
  </table>
</div>
</div>

    
 

                </div>

              
               </div>
               :""}
               
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

export default Exchange