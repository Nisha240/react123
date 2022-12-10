import React ,{useState}from 'react'

function Multipleinputs() {
    const [register, setregister] = useState({
        name:"",
        email:"",
        phone:"",
        password:" "
    })
    const handleInput=(e)=>{
        const name=e.target.value
    setregister(e.target.value);
        console.log(name);
    }
    const Submithandler=(e)=>{
e.preventDefault();

console.log(e.target.value);
    }
  return (<>
<form onSubmit={Submithandler}>
    <div>
<label htmlFor='name'>Username</label>
<input type="text" name="name" id="name" value={register.name} onChange={handleInput.bind} />
    </div>
    <div>
<label htmlFor='email'>Email</label>
<input type="email" name="email" id="email"  value={register.email} onChange={handleInput} />
    </div>
    <div>
<label htmlFor='phone'>Phone</label>
<input type="text" name="phone" id="phone"  value={register.phone} onChange={handleInput} />
    </div>
    <div>
<label htmlFor='password'>Password</label>
<input type="text" autoComplete='off' name="password" id="password"  value={register.password} onChange={handleInput} />
    </div>
    <button className='btn btn-primary' type='submit' onClick={Submithandler}> Registration</button>
</form>
</>
  )
}

export default Multipleinputs
