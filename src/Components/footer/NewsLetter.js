import { AiOutlineMail } from "react-icons/ai";
import { useReducer } from "react";  


const initialState = {
    email: ''
   
}

const ACTION = {
    GETEMAIL: 'getEmail',
    ISSIGNEDIN : 'isSignedIn',
}
const newsletterReducer= (state, action) => {
    const { type, payLoad } = action;
    const {email} = state;
    switch (type) {
        case ACTION.GETEMAIL: {
            return {
                
                email:payLoad.email
            }
        }
        /* case ACTION.ISSIGNEDIN: {
            return {
                
                isSignedIn : (isSignedIn)=>!isSignedIn 
            }
        } */
        default: {
            return state
            }
    }
}

export default function Address() {
    const [state, dispatch] = useReducer(newsletterReducer,  initialState);
   
    const handleClick = (e) => {
        e.preventDefault();       
        dispatch({ type: ACTION.GETEMAIL, payLoad: { email: '' } });
        alert('Thank you for subscription!!!');
        
      }
    
    return (
        
        <div className="p-5 border-b  border-black sm:border-b-0 sm:border-r  sm:border-black md:text-2xl">
           
            < h1 className="flex flex-row items-center  "> <AiOutlineMail className='mr-2 text-3xl md:text-5xl' />  <div className="text-[18px] md:text-2xl">SIGN UP FOR OUR NEWSLETTER</div>   </h1 >
            <br></br>
            <div className="flex flex-row justify-center items-center">
                <input type='email' className="w-3/4 h-6 bg-gray-100 focus:bg-white md:p-6 " placeholder="Email" value={state.email} onChange={(e) => { dispatch({ type: ACTION.GETEMAIL, payLoad: { email: e.target.value } }) }} />
                <button className="border border-black p-1  md:p-6 m-1 text-[14px] md:text-[28px] w-1/4 h-6 flex justify-center items-center hover:bg-white hover:text-gray-600" onClick={handleClick} >Sign Up</button> 
               
            </div>
            
            </div>
            
        
    )
}