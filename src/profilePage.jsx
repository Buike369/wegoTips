import React,{useState} from 'react'
import "./style/newProfile.css"

const ProfilePage = () => {
 const [sectionChange,setSectionChange] = useState("tips")
    const  tipDetails = [{name:"Tips",value:"2,633"},{name:"Wins",value:"1,740"},{name:"Profit",value:"+575.06"},{name:"Draw",value:"99"},{name:"Win Rate",value:"66%"},{name:"ROI",value:"21.8%"}]



  return (
    <div style={{marginTop:"70px"}}>
<div className='ParentDivNewHod'>
    <div className='tipsterProfile'>
        Tipster Profile
    </div>


  // section

        <div className='profileCoverDiv'>
            <div><img src="/img/tom.png" alt="" className='Kn1'/></div>
            {/* <div className="point">
                <img src="/img/picMan.png" alt="" className="ImgPicMan"/>
                <img src="/img/picManImg.png" alt="" className="ImgPicMan1"/>
            </div> */}
            <div className='holder7'> 
                <div className='holder2'>
                    <div className="point">
                        <img src="/img/picMan.png" alt="" className="ImgPicMan"/>
                         <img src="/img/picManImg.png" alt="" className="ImgPicMan1"/>
                    </div>
                    <div>
                        <div className='AmosD'>
                            <p className='namePad'>Amos Rios</p>
                            <img src="/img/iconGuide.png" alt="" className='holder3' />
                              <img src="/img/usaFlag.png" alt="" className='holder3'/>
                        </div>
                         <div className='AmosD'>
                            <img src="/img/calendar.png" alt="" className='holder4'/>
                            <p className='holder5'>Joined Jan, 2017</p>
                         </div>
                     
                    </div>
                </div>
                <div className='AmosD holder8' >
                    <div><button className='holder6 holder5'>Subscribe From</button></div> 
                       <div><button  className='holder6 holder5'>Follow</button></div>
                </div>
            </div>

            <div className='holder7 holder8 msg1' >
                {tipDetails.map((app,id)=>(
                <div key={id} className="msg">
                    <p className='msg3'>{app.value}</p>
                    <p className='msg4'>{app.name}</p>
                </div>
                ))}
            </div>
            <div className='AmosD'>
                <div className='AmosD IP1'>
                  <img src="/img/tips.png" alt=""/>
                  <p className='IP holder3' onClick={()=>setSectionChange("tips")}>Tips</p>
                </div>
                  <div className='AmosD IP1'>
                  <img src="/img/statistics.png" alt=""/>
                  <p className='IP holder3' onClick={()=>setSectionChange("tips3")}>Statistics</p>
                </div>
                  <div className='AmosD IP1'>
                  <img src="/img/followerSecond.png" alt=""/>
                  <p className='IP holder3' onClick={()=>setSectionChange("tips1")}>Followers (2400)</p>
                </div>
                  <div className='AmosD IP1'>
                  <img src="/img/followingSecond.png" alt=""/>
                  <p className='IP holder3' onClick={()=>setSectionChange("tips2")}>Following (240)</p>
                </div>
            </div>
        </div>
 {/* section for tips */}

    <div className="Above">
        {/* //change here */}

        <div className='myDivb1'>

        {/* // sect 1 change */}
        {(sectionChange === "tips") ? 
        <div>
            <div className='AmosD'>
                <div><button className=' holder6 AC'>Active Tips</button></div>
                   <div><button className=' holder6 AC'>Finished Tips</button></div>
            </div>
            <div>
            <p className='Oct'>28th Oct 2021</p>
            <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'>ENGLAND Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC v Peterborough United</p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                  </div>
            </div>
            </div>
        </div> 
        :""}

        {/* // sect 2 change */}
         {(sectionChange === "tips1") ? 
        <div>

        </div>
          :""}
     
               {(sectionChange === "tips2") ? 
        <div>

        </div>
            :""}

            </div>

    
          <div className='myDivb2'>
          
            <div>
                <form>
                    <div>
                        <p>Subscribe To This Tipster</p>
                        <div>
                            <div>
                                <div></div>
                                <div>1 Day <span>$1900</span></div>
                            </div>
                             <div>
                                <div></div> 
                                <div>7 Day <span>$1900</span></div>
                             </div>
                        </div>
                        <div></div>
                        <p>Payment method</p>

                        //pay 1
                        <div>
                            <div>
                                <div>.</div>
                                <p>Card</p>
                            </div>
                             <div>
                                <img src="" alt="" />
                                 <img src="" alt="" />
                                  <img src="" alt="" />
                             </div>
                        </div>
                        //pay 2
                         <div>
                            <div>
                                <div>.</div>
                                <p>Card</p>
                            </div>
                             <div>
                                <img src="" alt="" />
                                
                             </div>
                        </div>
                        //pay3
                            <div>
                            <div>
                                <div>.</div>
                                <p>Card</p>
                            </div>
                             <div>
                                <img src="" alt="" />
                                
                             </div>
                        </div>
                        <div>
                            Buy Now
                        </div>
                    </div>
                </form>
            </div>
          
            <div>
                <div><img src="" alt="" /></div>
                  <div>
                    <p>2400</p>
                     <p>Subscribers</p>
                  </div>
            </div>
          </div>

   </div>
</div>
            </div>
  )
}

export default ProfilePage