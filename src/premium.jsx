import React,{useContext,useState,useEffect} from 'react'
import "./style/premium.css"
import Footer from "./footer"
import ReactPaginate from 'react-paginate';

import { AuthContext } from './context/authContext';







const Premium = () => {
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const [itemsPerPage,setItemsPerPage] = useState(6)
const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  
  const card = ["sport","binary","forex","crytptocurrency","sport","binary","forex","crytptocurrency"]

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
       

<div className='PGuideE'>
<div className="tenT">
  <div className='mikeW'>Forex</div>
  <div  className='mikeW'>Sports</div>
  <div  className='mikeW'>Cryptocurrency</div>
  <div  className='mikeW'>Binary</div>
</div>
<div className='carTy'>
  <div className="Car">
      <select id="cars" name="cars" className="Car2"  >
           <option value="ultimate" id={1}>Forex</option>
          
           <option value="Arbitrage" id={2}>Sports</option>
           <option value="bonusBet" id={3}>Cryptocurrency</option>
           <option value="dutchingBet" id={4}>Binary</option>
         
           
  </select>
      </div>
      </div>
        <div style={{padding:"10px 15px 25px 15px"}} >
    <div className="TY9">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY30"  style={{border:"1px solid rgb(61 62 126)"}}>
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
  
  <div>

    <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`previous`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
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
        <Footer/>
    </div>
  )
}

export default Premium