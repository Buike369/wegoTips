import React,{useState,useContext,useMemo,useEffect} from "react"
import "./style/profile.css"
import {useNavigate} from "react-router-dom";
import {AuthContext} from './context/authContext';
import Select from 'react-select'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import countryList from 'react-select-country-list'



const Profile = () =>{


  //  const resetLink = `http://localhost:3000/referral/${currentUser?.referral_code}`;
 
    const {currentUser} = useContext(AuthContext);

    const resetLink = `https://earnars.com/referral/${currentUser?.referral_code}`;
    const [value, setValue] = useState('')
    const [err,setError] = useState(null)
    const [text,setText]= useState(resetLink)
    const [isCopied, setIsCopied] = useState(false);
    const [you,setYou] = useState([])

    // const resetLink = `http://localhost:3000/referral/${currentUser?.referral_code}`;

    const [inputs,setInputs] = useState({
      country:"",
      phoneNumber:""

    })

        const [inputs50,setInputs50] = useState({
         showPassword: false,
    })

    // console.log(currentUser)
    const [display,setDisplay] = useState(false)
    const options = useMemo(() => countryList().getData(), [])

    const handleChange = (e) =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    // const handleClickShowPassword = () => {
    //     setInputs50(previ=>({ ...previ, showPassword: !inputs50.showPassword }));
    //   };

    const changeHandler = e => {
        setInputs({
            country:e.label
        })
      }

      async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }

      const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(text)
          .then(() => {
            // If successful, update the isCopied state value
            // alert("text copied")
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
     

      const navigate = useNavigate()

      const handleSumit = async (e)=>{
        e.preventDefault()
       try{
        // await update(inputs)
         await axios.put("https://tea.earnars.com/api/post/"+ currentUser.id,inputs)
    
       }catch(err){
        console.log(err.response.data)
       }    
        }

      useEffect(()=>{
            const disk = async()=>{
 
                try {
               const res = await axios.get("https://tea.earnars.com/api/user/info/"+ currentUser.id)
                setYou(res.data[0])
             
            }catch(err){
                console.log(err)
            }
            }
            disk()
        })   
        //  useEffect(()=>{
        //     const disk =async()=>{

        //         try {
        //        const res= await axios.get("/user/info/" + currentUser.id)
        //         setYou(res.data[0])
            
        //     }catch(err){
        //         console.log(err)
        //     }
        //     }
        //     disk()
        // },[])

    return(
        <div className="PpDiv" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>

<div className="pet">
            <div className="Profile_Div">
                <div className="FimeOp">
                <p className="ProfilePp" >Profile Overview</p>
               <div className="ppCopy"><span style={{color:"#0ceb0c"}}>Referral code : </span> <input type="text" className="copyCode copyCode4"  value={text} readOnly/><div onClick={handleCopyClick} className="copyCode copyCode1 copyCode2">copy</div></div>
                </div>
                <div className="ProfilePp_PP">
                    <div className="yink"><img src="/img/invite.jpg" alt="" className="ProfilePp_P2P" /></div>
                    <div className="Conty">
                       <p className="Country1">Full Name : {(currentUser?.username)||"kingsley Chuks"}</p> 
                       <p className="Country1">User ID : TIP0000{(currentUser?.id)|| 8}</p>
                       <p className="Country1">Email : <span>{(currentUser?.email)||"chukwubuikekingsley@gmail.com"}</span></p>
                       <p className="Country1">Phone : {you.phone_number}</p>
                       <p className="Country1">Country :{you.country}</p>
                    </div>
                </div>
                 {isCopied && <p className="linkCopied">link copied</p>}
                <div className="InEdit">
                <p className="EditInfo">Edit information</p>

                <div className="EditProfileButtoon" onClick={()=>setDisplay(!display)}>update profile</div>
                </div>

                <div>
                    <form>
                        {display ? 
                        <div className="WithDec">
                            
                        <div className="WentSon">
                            {/* <div className="UserEm">
                                <p className="nameFin upon">Name</p>
                                <div><input type="text" 
                                name="username" placeholder="Enter your name" className="Profile_Dente" onChange={handleChange} value={inputs.username}/></div>
                            </div> */}
                            {/* <div className="UserEm">
                                <p className="nameFin upon">Email</p>
                                <div><input type="email" placeholder="Enter your email" 
                                name="email" 
                                onChange={handleChange}className="Profile_Dente" value={inputs.email}/></div>
                            </div> */}
                        </div>
                        
                        <div className="WentSon">
                            <div  className="UserEm">
                                <p className="nameFin upon">Country</p>
                                <div>
                              
                                    <Select options={options}
                                    
                                    onChange={changeHandler}
                                    name="country"/>
                                    </div>
                            </div>
                            <div  className="UserEm">
                                <p className="nameFin upon">Phone Number</p>
                                <div><input type="number" placeholder="Enter phone number" 
                                name="phoneNumber"
                                onChange={handleChange}
                                className="Profile_Dente" /></div>
                            </div>
                        </div>
                        
                        <div className="WentSon">
                            
                            {/* <div className="UserEm">
                                <p className="nameFin upon">Password</p>
                                <div>
                                   <div className="sers"> <input type={inputs50.showPassword ? "text":"password"} placeholder="Password" className="Full_Name" onChange ={handleChange} name="password" value={inputs.password}
                  />
                  {inputs50.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                                </div>
                            </div> */}
                        </div>
                        

                         <div className="UpDatePls" onClick={handleSumit}>Update</div>
                         </div>
                         :""}


                         <p className="AddBankAccount">Add Bank Account Details</p>
                         <div className="WithDec">
                        <div className="WentSon">
                            
                            <div className="UserEm">
                                <p className="nameFin upon">Bank Name</p>
                                <div><input type="text" placeholder="Choose your bank" className="Profile_Dente"/></div>
                            </div>
                            <div className="UserEm">
                                <p className="nameFin upon">Account Name</p>
                                <div><input type="email" placeholder="Enter account number" className="Profile_Dente"/></div>
                            </div>
                        </div>
                        <div></div>
                        <div className="UpDatePls">Update</div>

                        <div className="NoteDDiv">
                        <div className="RoteDiv"></div>
                        <div className="NoteRote">Note</div>
                        <div className="RoteDiv"></div>
                    </div>

                    <p className="mustbebak">
                       Your bank name must be correspond with the full name you used during registration. Once your bank details are updated it cannot be changed unless valid ducuments are provided. 
                    </p>
                        </div>

                  
              


                    </form>
                </div>
            </div>
            </div>

        </div>
    )
}


export default Profile;


