import { useReducer ,useEffect} from "react";

const initialState = {
  name: '',
  email: '',
  message: '',
}

const ACTION = {
  GETNAME: 'getName',
  GETEMAIL: 'getEmail',
  GETMESSGAE : 'getMessage',
}

const contactReducer = (state, action) => {
  const { type, payLoad } = action;
  
  switch (type) {
    case ACTION.GETNAME: {
      return {
       ...state,
        name: payLoad.name,
      }
      
    }
    case ACTION.GETEMAIL: {
      return {
        ...state,
        email: payLoad.email
      }
    }
    case ACTION.GETMESSGAE: {
      return {
        ...state,
        message: payLoad.message
      }
    }
    default:
      throw new Error();
  }
}


export default function ContactForm() {

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.GETMESSGAE, payLoad: { message: '' } });
    dispatch({ type: ACTION.GETNAME, payLoad: { name: '' } });
    dispatch({ type: ACTION.GETEMAIL, payLoad: { email: '' } });
    alert('Message sent successfully. We will contact you soon!!!');
    
  }


    return (
        <div className='w-full  flex flex-col justify-center items-center bg-[#12122b] p-2 md:p-4 lg:p-6'>
        <p className='font-light md:text-2xl lg:text-4xl'> HAVE A QUESTION?</p>
          <p className='text-3xl md:text-4xl lg:text-6xl font-light text-green-500'>Send us a Message </p>
          <div className='mt-6 md:mt-8 flex flex-col justify-center items-center'>
            <div className='flex justify-center '>
            <input type="text" placeholder="Name" className='p-2 md:p-6 w-1/4 md:w-2/4 rounded-md h-10 mr-2  text-black ' onChange={(e)=>dispatch({type:ACTION.GETNAME,payLoad:{name:e.target.value}})} value={state.name} />
            <input type="email" placeholder ='Email' className=' p-2 md:p-6 w-1/4 md:w-2/4 rounded-md h-10  text-black'  onChange={(e)=>dispatch({type:ACTION.GETEMAIL ,payLoad:{email:e.target.value}})} value={state.email}/>
            </div>
            <textarea className='mt-2 p-2 md:p-6 rounded-md w-2/4 md:w-full h-[200px] md:h-[400px] text-black' placeholder='Message' onChange={(e)=>dispatch({type:ACTION.GETMESSGAE ,payLoad:{message:e.target.value}})} value={state.message}></textarea>
            <button className='border-green md:w-1/4 bg-green-500 p-2 mt-2 border-1 rounded-sm hover:bg-white hover:text-green-600' onClick={handleClick}>Send Message</button>
            
          </div>

        </div>
    )
}