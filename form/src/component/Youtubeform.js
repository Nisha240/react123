import React,{useState} from 'react'

function Youtubeform() {

const [state,setState]=useState(" ");
  const submithandler=()=>{
    ("thankyou")
  }
  return (
    <div>
      <form>
        
            <label htmlFor='name' >Name </label>
            
            <input type="text" name='name' id='name' onChange={e=>setState(e.target.name)}/><br/>
        
            <label htmlFor='email'>Email</label>
            <input type="email" name='email' id='email'onChange={e=>setState(e.target.name)}/><br/>
            <label htmlFor='Channel'>Channel</label>

            <input type="text" name='Channel' id='Channel' onChange={e=>setState(e.target.name)}/><br/>
            <button  type="button" className="btn btn-primary" onSubmit={submithandler}>Submit</button>

      </form>
    </div>
  )
}

export default Youtubeform
