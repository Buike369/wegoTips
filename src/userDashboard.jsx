import React, {useState} from  'react'
import Footer from "./footer"
import "./style/userDashboard.css"
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'

const UserDashboard = () => {
const [section1, setSection1] = useState("userSection")
const [accountSetting, setAccountSetting] = useState("edit")
const [section2, setSection2] = useState("AffiliateSection")
const [section3, setSection3] = useState("tipsterOver")
     const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const [itemsPerPage,setItemsPerPage] = useState(6)
const [itemOffset, setItemOffset] = useState(0);
const [isTipster,setIsTipster] = useState(true)

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
  return (
    <div className='vimvi'>

  <div className='userD uderDD '>
    <div className='userD3'>
              <div className='userD5'>
                <div className=''>
                    <div className='userD50'>
                    <div className='dvd2 dvd23'>
                    <div className='userD6'><img src="/img/dashboard-profile3.png" alt="" className='profileDImg'/></div>
                    <div className='JohnKen1'>John Doe</div>
                    <div className='JohnKen2'> <img src="/img/map-icon.png" alt=""/><span className='JohnKen3'>Nigeria</span></div>
                    <div  className='JohnKen2'><img src="/img/calendar-icon2.png" alt=""/><span className='JohnKen3'>Joined Oct, 2021</span></div>
                    <button className='EMMAN'><div className=' JohnKen5'><img src="/img/edit-icon.png" alt=""/><span className='JohnKen7'>Edit Your Profile</span></div></button> 
                    <div className='JohnKen4 JohnKen8'> <div className='JohnKen5'><img src="/img/followers.png" alt=""/><span className='JohnKen7 JohnKen6'>Followers</span></div><div className='JohnKen6'>2400</div></div>
                     <div className='JohnKen4 JohnKen8'> <div className='JohnKen5'><img src="/img/following.png" alt=""/><span className='JohnKen7 JohnKen6'>Following</span></div><div className='JohnKen6'>2600</div></div>
                    
                     </div>
                     </div>
                     {isTipster ? 
                    <>
                    <div className='userD50'>
                      <div className=' dvd1 JohnKen5' onClick={()=>setSection1('userSection')} style={{backgroundColor:section1 === "userSection" ? "#0d0740": "", borderLeft: section1 === "userSection" ? "2px solid #5157ab":"" }}><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Dashboard</span></div>
                      <div className='dvd1 JohnKen5' onClick={()=>setSection1('userSection2')}  style={{backgroundColor:section1 === "userSection2" ? "#0d0740": "", borderLeft: section1 === "userSection2" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Tipster Wallet</span></div>
                       <div className='dvd1 JohnKen5' onClick={()=>setSection1('userSection3')}  style={{backgroundColor:section1 === "userSection3" ? "#0d0740": "", borderLeft: section1 === "userSection3" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Affiliate Wallet</span></div>
                         <div className='dvd1 JohnKen5 '><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Post Tip</span></div>
                           <div className='dvd1 JohnKen5 '><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Post Result</span></div>
                             <div className='dvd1 JohnKen5 '><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Delete Post</span></div>
                             <div className='dvd1 JohnKen5 ' onClick={()=>setSection1('userSection1')}  style={{backgroundColor:section1 === "userSection1" ? "#0d0740": "", borderLeft: section1 === "userSection1" ? "2px solid #5157ab":"" }}><img src="/img/subscriptions.png" alt=""/> <span className='JohnKen7' >Subscription</span></div>
                        <div className='dvd1 JohnKen5'  onClick={()=>setSection1('userSection4')}  style={{backgroundColor:section1 === "userSection4" ? "#0d0740": "", borderLeft: section1 === "userSection4" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Pricing</span></div>
                          <div className='dvd1 JohnKen5 ' onClick={()=>setSection1('userSection5')}  style={{backgroundColor:section1 === "userSection5" ? "#0d0740": "", borderLeft: section1 === "userSection5" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Setting</span></div>
                          </div>
                          </>
                          :
                          <>
                          <div className='userD50'>
                      <div className='dvd1 JohnKen5' onClick={()=>setSection1('userSection')}><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen5'> Dashboard</span></div>
                      <div className='dvd1 JohnKen5 '><img src="" alt=""/> <span className='JohnKen5'> Main Wallet</span></div>
                       <div className='dvd1 JohnKen5 'onClick={()=>setSection1('userSection3')}><img src="" alt=""/> <span className='JohnKen5' > Affiliate Wallet</span></div>
            
                             <div className='dvd1 JohnKen5 '><img src="/img/subscriptions.png" alt=""/> <span className='JohnKen5'>Subscription</span></div>
                          <div className='dvd1 JohnKen5 '><img src="/img/settings.png" alt=""/> <span className='JohnKen5'>Setting</span></div>
                          <div className='dvd1 JohnKen5 '><img src="" alt=""/> <span className='JohnKen5'>Become a Tipster</span></div>
                           </div>
                          </>}
                     {/* <div>Last Sign In</div> */}
                     {/* <div><img src="" alt=""/><span>8 Oct 2021, 16:28 PM GMT +0</span></div> */}
                </div>
                <div className='dvd3'>
                <div  className='dvd2'>
                     <div className='HelpMe' ><img src="/img/experts.png" alt=""/></div>
                <div className="helpMe1">Need Help?</div>
                <div className='helpMe1'>We’re here to help</div>
                <div className='helpMe1'>Our experts are here to help!</div>
               <a href="/contact"> <div className='usContact'>Contact Us</div></a> 
                </div>
                </div>
                </div>
    </div>
    <div className='userD4'>
      <div className='emekaUs'>
      <div>
        <div className='Fa1'>
           <div className='Fa2'><input type="" placeholder="Search"  className='Fa4'/></div>
           <div className='Fa3'><a href="/" style={{color:"#fff", textDecoration:"none",fontSize:'18px',fontWeight:'700'}}>Earnars</a></div>
        </div>
      </div>
      <div className='Fa10'>

        {section1 === "userSection"? 
        <>
        <div className="ManB">
           <div  className="ManB1 ManB30">
             <div className='mainVm34'>
              <div className='likeYou'>
               <div className='MainVm'>Total Tips Posted</div>
               <div className='MainVm1'>500</div>
               </div>
            </div>
           </div>
           <div  className="ManB1 ManB30">
             <div className='mainVm34'>
              <div className='likeYou'>
               <div className='MainVm'>Successful Rating</div>
               <div className='MainVm1'>75%</div>
               </div>
            </div>
           </div>
           <div  className="ManB1">
            <div className='ManB ManB5'>
              <div className='ManB2'>
                <div className='EarningBolo' >Active Tips</div>
                 <div className='EarningBolo1'>120</div>
              </div>
               <div className='ManB2'>
                <div className='EarningBolo' >Inactive Tips</div>
                 <div className='EarningBolo1'>20</div>
               </div>
            </div>
           </div>
            <div  className="ManB1">
               <div className='ManB ManB5'>
              <div className='ManB2'>
                <div className='EarningBolo' >Successful Tip</div>
                 <div className='EarningBolo1'>120</div>
              </div>
               <div className='ManB2'>
                <div className='EarningBolo' >Failed Tips</div>
                 <div className='EarningBolo1'>20</div>
               </div>
            </div>

            </div>
          
        </div>

    <div className='ManUm'>
        <div className="wereAre">
          {card.map((app,id)=>(
                                <div className="cardProfileDiv TY44 eretYem"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 TY38"/></div>
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
            <div className='jd1'></div>
          <div className='weNeed'>
       <div className='weNeed1 jd3'>
         <p className='weNeed2'>Active Membership</p>
         <div>
           <div className='paw1 weNeed6 jd'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'>$100</span></div>
                            </div>
                           <div className="StartDate">Start Date: 03/02/2022</div>
                           <div className="StartDate">End Date: 03/02/2022</div>
                           <div>Tips Received:1</div>
                           <div className="StartDate">Payment Method:Balance</div>
         
         </div>
         <div className="houseRuMM WonB  mainMa">Renew</div>
       </div>
       </div>
       
        </div>
        ))}
        </div>
        </div>
        </>
        :""}
        {section1 === "userSection1" ?
        <>
        <div className='ManUm'>
          <div className='allNewTips ManUm1'>

            <div className="youpin">

              
                 
              <div className="UponT">
                <div>
                  <div>Total Number of Subscription </div>
                  <div></div>
                  <div></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"70px"}}>Name</th>
         <th style={{width:"150px"}}>UserId</th>
        <th style={{width:"180px"}}>Type</th>
        <th style={{width:"180px"}}>Commission</th>
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </div>
        </> :""}
           {section1 === "userSection2"? 
        <>
    <div className='BKOver'>
      <div className="BkOver1"  style={{backgroundColor: section3 === "tipsterOver" ? "#fff" :"#0d0740", color: section3 === "tipsterOver" ? "#000" :"gold"}}  onClick={()=>setSection3("tipsterOver")}>Wallet Overview</div>
       <div className="BkOver1"  style={{backgroundColor: section3 === "tipsterOver1" ? "#fff" :"#0d0740", color: section3 === "tipsterOver1" ? "#000" :"gold"}} onClick={()=>setSection3("tipsterOver1")}>Membership Subscription</div>
    </div>
        <div className="ManB">
           <div  className="ManB1 ManB30">
             <div className='mainVm34'>
              <div className='likeYou'>
               <div className='MainVm'>Main Wallet</div>
               <div className='MainVm1'>$5000</div>
               </div>
            </div>
           </div>
           <div  className="ManB1 ManB30">
             <div className='DataBoundle2'>
              <div  className='DataTo tipUp'>Tipster Wallet</div>
              <div className='tipWall tipUp'>#2000</div>

             <div className='TransferTip'>Transfer</div>
             </div>
           </div>
           <div  className="ManB1">
            <div className='ManB ManB5'>
              <div className='ManB2'>
               <div className='DataBoundle'><span className='DataTo'>Data</span></div>
              </div>
               <div className='ManB2'>
                 <div className='EarningBolo' >Daily Earning</div>
                 <div className='EarningBolo1'>$120</div>
               </div>
            </div>
           </div>
            <div  className="ManB1">
               <div className='ManB ManB5'>
              <div className='ManB2'>
                <div className='EarningBolo'>Weekly Earning</div>
                 <div className='EarningBolo1'>$200</div>
              </div>
               <div className='ManB2'>
                      <div className='EarningBolo'>Monthly Earning</div>
                 <div className='EarningBolo1'>$200</div>
               </div>
            </div>

            </div>
          
        </div>

    <div className='ManUm'>
           {section3 === "tipsterOver" ? <>
          <div className='allNewTips ManUm1'>

            <div className="youpin">

              
                 
              <div className="UponT">
                <div>
                  <div className="sactions">Transactions </div>
                  <div></div>
                  <div></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"70px"}}>Name</th>
         <th style={{width:"100px"}}>Type</th>
        <th style={{width:"100px"}}>Amount</th>
        <th style={{width:"180px"}}>Recipient</th>
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </> :""}
           {section3 === "tipsterOver1" ? <>
          <div className='allNewTips ManUm1'>

            <div className="youpin">

              
                 
              <div className="UponT">
                <div>
                  <div className="sactions">Transactions </div>
                  <div></div>
                  <div></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"70px"}}>Name</th>
         <th style={{width:"100px"}}>Type</th>
        <th style={{width:"100px"}}>Amount</th>
        <th style={{width:"180px"}}>Recipient</th>
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </> :""}
        </div>
        </>
        :""}

         {section1 === "userSection3"? 
        <>
    <div className='BKOver'>
      <div className="BkOver1" style={{backgroundColor: section2 === "AffiliateSection" ? "#fff" :"#0d0740", color: section2 === "AffiliateSection" ? "#000" :"#fff"}} onClick={()=>setSection2('AffiliateSection')}>Affiliate Overview</div>
       <div className="BkOver1" style={{backgroundColor: section2 === "AffiliateSection1" ? "#fff" :"#0d0740", color: section2 === "AffiliateSection1" ? "#000" :"#fff"}} onClick={()=>setSection2('AffiliateSection1')}>Transactions/Referrals Subscription</div>
    </div>
        <div className="ManB">
           <div  className="ManB1 ManB30 ManMMb">
            <div className='mainVm34'>
              <div className='likeYou'>
               <div className='MainVm'>Main Wallet</div>
               <div className='MainVm1'>$5000</div>
               </div>
            </div>
           </div>
           <div  className="ManB1 ManB30 ManMMb">
                <div className='mainVm34'>
              <div className='likeYou'>
               <div className='MainVm'>Affiliate Wallet</div>
               <div className='MainVm1'>$7000</div>
               </div>
            </div>
           </div>
           <div  className="ManB1 ManMMb1 ManB30">
              <div className='ManMMb2'>
                 <div className='UnLockAff'>Unlock Your Affiliate wallet and get access to tons of opportunity to make money  </div>
                 <div className='UnlockAff1'> Click to Unlock Now</div>
              </div>
           </div>
           
          
        </div>
            

            {section2 === "AffiliateSection" ? 
            <>
    <div className='ManUm'>
          <div className='allNewTips ManUm1'>

            <div className="youpin">

              
                 
              <div className="UponT">
                <div className='UponT35'>
                  <div className='OfReferral2'>Total Number of Referrals:<span>250</span> </div>
                  <div className='OfReferral2'>active: <span>200</span></div>
                  <div className='OfReferral2'>inActive : <span>50</span></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"180px"}}>Name</th>
         <th style={{width:"70px"}}>Referral Id</th>
    
        <th style={{width:"70px"}}>Commission</th>
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>Chukwubuike kingsley</td>
          <td>002</td>
   
        <td>30%</td>
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>Chukwubuike kingsley</td>
          <td>004</td>
        
        <td>25%</td>
        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>Chukwubuike kingsley</td>
          <td>0056</td>
       
        <td>45%</td>
        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>Chukwubuike kingsley</td>
          <td>0045</td>
       
        <td>60%</td>
        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>chukwubuike kingsley</td>
          <td>0024</td>
   
        <td>20%</td>
        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </div>
        </>

         :""}
              {section2 === "AffiliateSection1" ? 
            <>
    <div className='ManUm'>
          <div className='allNewTips ManUm1'>

            <div className="youpin">

              
                 
              <div className="UponT">
                <div className='UponT35'>
                  <div className='OfReferral2'>Total Number of Referrals:<span>250</span> </div>
                  <div className='OfReferral2'>active: <span>200</span></div>
                  <div className='OfReferral2'>inActive : <span>50</span></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"70px"}}>Type</th>
         <th style={{width:"80px"}}>Amount</th>
        <th style={{width:"80px"}}>UserId</th>
      
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>7 days</td>
          <td>#2000</td>
        <td>004</td>
     
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>1 day</td>
          <td>#4000</td>
        <td>0056</td>

        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>30 days</td>
          <td>#5000</td>
        <td>0089</td>

        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>1 day</td>
          <td>#70000</td>
        <td>0012</td>

        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>7 days</td>
          <td>#20000</td>
        <td>0029</td>

        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </div>
        </>

         :""}
        </>
        :""}
        {section1 === "userSection4"? <>
        <div className="pricing">
          <div className='MembershipP'>
            Set Your Membership Price Tag
          </div>
          <div className="pricingL PR">
            <div className='PR1'>
              <select className='Sel'>
                <option>
                  daily
                </option>
                  <option>
                  weekly
                </option>
                  <option>
                  Monthly
                </option>
              </select>
            </div>
           <div className='PR2'><input type="number" placeholder="Enter  Amount" className="PriceN"/></div>
           <div className='PR3'>
            <button className='PriceButton'>Enter</button>
           </div>
          </div>
          <div className="pricingL">
            <div className="pricingL1"><span className='gameDay'> 1 day</span> <span className='gameDay'> $500</span> <button className="RemoveButton">Remove</button></div>
            <div className="pricingL1"> <span className='gameDay'> 7 days</span><span className='gameDay'> $1000</span> <button className="RemoveButton">Remove</button></div>
            <div className="pricingL1"><span className='gameDay'> 30 days</span> <span className='gameDay'>$1500</span> <button className="RemoveButton">Remove</button></div>
          </div>
        </div>
        </>:""}
             {section1 === "userSection5"? <>
                   <div className='bAcount'>
             <div className='Mu1'>
                     <div className=' dvd1 JohnKen5 minYU'  onClick={()=>setAccountSetting("edit")}><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Edit Profile</span></div>
                      <div className=' dvd1 JohnKen5 minYU' onClick={()=>setAccountSetting("Notification")} ><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Notification</span></div>
                       <div className=' dvd1 JohnKen5 minYU'  ><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Deposit</span></div>
                        <div className=' dvd1 JohnKen5 minYU' onClick={()=>setAccountSetting("MemberShip")} ><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Membership</span></div>
                         <div className=' dvd1 JohnKen5 minYU' onClick={()=>setAccountSetting("edit")} ><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Transaction</span></div>
                    
             </div>
                  {accountSetting === "edit" ? <>
                  <div>
                    <div className='SetAE'>Account Settings</div>
                    <div className='bAcount SetAE1'>
                       <div className='ddE'>Email Address</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       <div><button className='Ch'>Save Changes</button></div>
                    </div>
                  </div>
                   <div>
                    <div className='SetAE'>Change Password</div>
                    <div className='bAcount SetAE1'>
                       <div className='ddE'>New Password</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       <div className='ddE'>Confirm Password</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       <div><button className='Ch'>Confirm</button></div>
                    </div>
                  </div>
                   <div>
                    <div className='SetAE'>Change Profile Photo</div>
                    <div className='bAcount SetAE1'>
                        
                       <div className="WonDiv Ch45">
                        <div><img src="/img/upload3.png" alt="" className="ch21"/></div>
                          <div>
                            <div className="uploadText uploadText1">Upload profile photo via:</div>
                           <div><input type ="file" /></div>
                           <div  style={{marginTop:"10px",color:"#acadd3"}}>Choose a photo from your personal computer. 3MB max.</div>
                          </div>
                       </div>
                    </div>
                  </div>
                     <div>
                    <div className='SetAE'>Billing Information</div>
                    <div className='bAcount SetAE1'>
                      <div className='WonDiv'>
                        <div style={{width:"48%"}}>
                       <div className='ddE'>Full name</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div style={{width:"48%"}}>
                       <div className='ddE'>Phone number</div>
                       <div className=''><input type="number" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                        <div className='WonDiv'>
                        <div style={{width:"48%"}}>
                       <div className='ddE'>Country</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div style={{width:"48%"}}>
                       <div className='ddE'>Address</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                        <div className='WonDiv'>
                        <div style={{width:"48%"}}>
                       <div className='ddE'>State/Province</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div style={{width:"48%"}}>
                       <div className='ddE'>City</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                        <div className='WonDiv'>
                        <div style={{width:"48%"}}>
                       <div className='ddE'>ZIP or postal code</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div style={{width:"48%"}}>
                       <div className='ddE'>Company name (if applicable)</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                       <div><button className='Ch'>Save Changes</button></div>
                    </div>
                  </div>
                  </> :""}

   {accountSetting === "Notification" ? <>
     <div>
                    <div className='SetAE'>Mobile Notifications / Text Messaging</div>
                    <div className='bAcount SetAE1'>
                      <div className='WonDiv'>
                        <div style={{width:"48%"}}>
                       <div className='ddE'>Country</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div style={{width:"48%"}}>
                       <div className='ddE'>Phone number</div>
                       <div className=''><input type="number" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                       
                      
                      
                       <div><button className='Ch'>Verify via SMS</button></div>
                    </div>
                  </div>
                   <div>
                    <div className='SetAE'>Email Notifications</div>
                    <div className='bAcount SetAE1'>
                       <div className='ddE'>Email Address</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       <div><button className='Ch'>Save Changes</button></div>
                       <div>This phone number is not shared with anyone. It will be used only to receive sms notifications.</div>
                    </div>
                  </div>
                  </> :""}

                     {accountSetting === "deposit" ? <>
                  </> :""}

                     {accountSetting === "MemberShip" ? <>
                        <div className="wereAre">
          {card.map((app,id)=>(
                                <div className="cardProfileDiv TY44 eretYem"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 TY38"/></div>
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
            <div className='jd1'></div>
          <div className='weNeed'>
       <div className='weNeed1 jd3'>
         <p className='weNeed2'>Active Membership</p>
         <div>
           <div className='paw1 weNeed6 jd'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'>$100</span></div>
                            </div>
                           <div className="StartDate">Start Date: 03/02/2022</div>
                           <div className="StartDate">End Date: 03/02/2022</div>
                           <div>Tips Received:1</div>
                           <div className="StartDate">Payment Method:Balance</div>
         
         </div>
         <div className="houseRuMM WonB  mainMa">Renew</div>
       </div>
       </div>
       
        </div>
        ))}
        </div>
                  </> :""}
   {accountSetting === "transaction" ? <>
                  </> :""}

                         </div> </>: ""}
      </div>
    </div>
    </div>

  </div>


     

            {/* <div className="bkFR">
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
               </div> */}
        {/* <Footer/> */}
    </div>
  )
}

export default UserDashboard