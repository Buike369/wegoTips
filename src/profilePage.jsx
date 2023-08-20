import React,{useState} from 'react'
import "./style/newProfile.css"

const ProfilePage = () => {

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
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <p>Amos Rios</p>
                            <img src="" alt="" />
                              <img src="" alt="" />
                        </div>
                         <div>
                            <img src="" alt="" />
                            <p>Joined Jan, 2017</p>
                         </div>
                     
                    </div>
                </div>
                <div>
                    <div><button>Subscribe From</button></div> 
                       <div><button>Follow</button></div>
                </div>
            </div>

            <div>
                {tipDetails.map((app,id)=>(
                <div key={id}>
                    <p>{app.value}</p>
                    <p>{app.name}</p>
                </div>
                ))}
            </div>
            <div>
                <div>
                  <img src="" alt=""/>
                  <p>Tips</p>
                </div>
                  <div>
                  <img src="" alt=""/>
                  <p>Statistics</p>
                </div>
                  <div>
                  <img src="" alt=""/>
                  <p>Followers (2400)</p>
                </div>
                  <div>
                  <img src="" alt=""/>
                  <p>Following (240)</p>
                </div>
            </div>
        </div>
// section for tips

    <div>
        //change here

        // sect 1 change
        <div>
            <div>
                <div><button>Active Tips</button></div>
                   <div><button>Finished Tips</button></div>
            </div>
            <div>
            <p>28th Oct 2021</p>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>ENGLAND Premier League, 15:30 GMT +0</p>
                    </div>
                    <p>Middlesbrough FC v Peterborough United</p>
                </div>
                  <div>
                    <div><button>Active Tip</button></div>
                    <div><button></button>image</div>
                  </div>
            </div>
            </div>
        </div> 

        // sect 2 change
        <div>

        </div>
        //end change
          <div>
          
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