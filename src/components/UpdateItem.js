import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { updateUser } from '../state/user/userSlice';

function UpdateItem() {
    const {id} = useParams();
    const user = useSelector(state=> state.user);
    // eslint-disable-next-line
    const currentuser = user.filter(u=> u.id == id)
    const {name, email} = currentuser[0];
    const [state, setState] = useState({uname:name, uemail:email});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e)=>{
        setState({...state, [e.target.name]:e.target.value})   
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser({id:id, name:state.uname, email:state.uemail }));
        navigate('/');
        
    }
  return (
    <div className="row my-5 d-flex justify-content-center">
    <form className="col-sm-8 col-md-6 p-3 rounded" onSubmit={e=> handleFormSubmit(e)} style={{background:'#957494'}}>
        <div className="mb-3">
            <label htmlFor="uname" className="form-label">Name</label>
            <input type="text" className="form-control" id="uname" name="uname" value={state.uname} onChange={(e)=>handleOnChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="uemail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="uemail" name="uemail" value={state.uemail} onChange={(e)=>handleOnChange(e)} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
        </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Update</button>
        </div>
        
   </form>
   </div>
  )
}

export default UpdateItem