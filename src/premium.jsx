import React,{useContext} from 'react'
import "./style/premium.css"
import Footer from "./footer"

import { AuthContext } from './context/authContext';


const Premium = () => {

  const card = ["sport","binary","forex","crytptocurrency"]

  const {currentUser,login,logout} = useContext(AuthContext);
  return (
    <div>
       <div className="PrmiumBanner" >
          <img src="/img/EarnarsBanner16.png" className="AffliateBannertt" alt=""/>
          </div>
        <div className="ApplyFor">
          <p className="unlock">Premium Membership Unlocks A Tipster Predictions</p>
            <p className="pageRisk">When you Subscribe to any of our verified tipster membership you get access to the tipster 
                                            daily, weekly & monthly prediction   </p>
        </div>
       

<div className='pag'>dropdown</div>
        <div style={{padding:"10px 15px 25px 15px"}} >
    <div className="TY1">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Don Knight</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
          <div className="typing">
            <div className="pork1">+4,345</div>
            <div className="pork">+2,434</div>
          </div>
           <div className="findingPP">
            <div className="followerp">ROI</div>
            <div className="followerp">Profit</div>
          </div>

          <div className="houseRuMM">View Profile</div>
        </div>
                       ))}
                       </div>
                      

     </div>
      <div style={{padding:"10px 15px 25px 15px"}} >
    <div className="TY1">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Don Knight</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
          <div className="typing">
            <div className="pork1">+4,345</div>
            <div className="pork">+2,434</div>
          </div>
           <div className="findingPP">
            <div className="followerp">ROI</div>
            <div className="followerp">Profit</div>
          </div>

          <div className="houseRuMM">View Profile</div>
        </div>
                       ))}
                       </div>
                      

     </div>
     <p className='pag'>pagination</p>

        <Footer/>
    </div>
  )
}

export default Premium