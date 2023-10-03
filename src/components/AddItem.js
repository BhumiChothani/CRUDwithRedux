import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { addUser } from '../state/user/userSlice';


function AddItem() {
    const dispatch = useDispatch();
    const user = useSelector(state=> state.user)
    const [state, setState] = useState({name:'', email:''});
    const navigate = useNavigate();

    const handleOnChange = (e)=>{
        setState({...state, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newuser = {id:user[user.length-1].id + 1, name:state.name, email:state.email};
        dispatch(addUser(newuser));
        navigate('/');
    }
  return (
    <div className="row my-4 d-flex justify-content-center">
    <form className="col-sm-8 col-md-6 p-3 rounded" onSubmit={e=>handleSubmit(e)} style={{background:'#957494'}}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={state.name} onChange={(e)=>handleOnChange(e)} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={state.email} onChange={(e)=>handleOnChange(e)} aria-describedby="emailHelp" required/>
            <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
        </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary" style={{width:'30%'}}>Add</button>
        </div>
        
   </form>
   </div>
  )
}

export default AddItem