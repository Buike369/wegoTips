import React from 'react'

const FindTipster = () => {
  return (
    <div>
        //section1
        <div>
            <div>
               <h1>Find Tipster</h1>
               <div>
                <div> Home icon_arrow </div>
                 <div>Tipster icon_arrow</div>
                  <div>Find Tipster icon_arrow</div>
               </div>
            </div>
            <div>
                <div>
                    <div>
                        <label>Level</label>
                        <select>
                            <option>All</option>
                             <option>level 1</option>
                              <option>level 2</option>
                               <option>level 3</option>
                                <option>level 4</option>
                        </select>
                    </div>
                    <div>
                        <label>Rank</label>
                        <select>
                            <option>1</option>
                             <option>2</option>
                              <option>3</option>
                             
                        </select>
                    </div>
                    <div>
                         <label>Sport</label>
                        <select>
                            <option>Football</option>
                             <option>Cricket</option>
                              <option>Badminton</option>
                             
                        </select>
                    </div>
                    <div>
                         <label>Period</label>
                        <select>
                            <option>Last 10 days</option>
                             <option>Last 20 days</option>
                              <option>Last 30 days</option>
                             
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <label>Min Profit</label>
                    <div><input type="text" placeholder='Enter Your min Profit'/></div>
                </div>
                <div>
                    <label>Min ROI, %</label>
                    <div><input type="" placeholder="Enter Your Min Profit"/></div>
                </div>
                <div>
                    <label>Min Tips</label>
                    <div><input type="" placeholder=""/></div>
                </div>
                <div>
                    <label>Win Rate</label>
                   <select>
                    <option>56%</option>
                     <option>78%</option>
                      <option>97%</option>
                   </select>
                </div>
            </div>
           <div>
              <div>
                <div>
                    <label>Min Odds</label>
                    <div><input type="range" placeholder=""/></div>
                </div>
                <div>
                    <label>Max Odds</label>
                    <div><input type="range" placeholder=""/></div>
                </div>
              </div>
              <div>
                <div><button>Clear All</button></div>
                 <div><button>Filter All</button></div>
              </div>
          </div>
        </div>

        //section2
        <div>
            <div>
                <p>Showing 4740 tipster</p>
                <div>
                    <button>But1</button>
                    <button>But2</button>
                </div>
                
            </div>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <img src="" alt=""/>
                            <p>*</p>
                        </div>
                        <div><p>Ross Austin</p><span>icon</span></div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p>34K</p>
                                    <p>Followers</p>
                                </div>
                            </div>
                             <div>
                             </div>
                              <div>
                                   <img src="" alt="" />
                                <div>
                                    <p>24K</p>
                                    <p>Following</p>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <p>+4,745</p>
                                <p>ROI</p>
                            </div>
                            <div>
                                <p>+2,434</p>
                                <p>Profit</p>
                            </div>
                            <div>
                                <p>+4,745</p>
                                <p>Win Rate</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>About Noel Perry</p>
                        <p>I'm excited to be on bitips and excited to help you win with my high accuracy tips. Check out my tips record for more info.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Choose Membership period</p>
                        <div>
                            <div>
                                <div>.</div>
                                <div><span>1</span><span>Day</span></div>
                                <div>$220</div>
                            </div>
                            <div> 
                                <div>.</div>
                                <div><span>1</span><span>Day</span></div>
                                <div>$220</div>
                            </div>
                        </div>
                        <div>Buy Now</div>
                    </div>
                    <div>
                        <button>33 Tips</button>
                        <button>View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FindTipster