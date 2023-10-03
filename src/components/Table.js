import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { deleteUser } from '../state/user/userSlice';

function Table() {
    const user = useSelector((state)=> state.user);
    const dispatch = useDispatch();
  return (
    <>
    <div className="d-md-flex justify-content-center">
        <div style={{minWidth:'80%'}}>
           <h2 className="text-center my-4">CURD APP</h2>
           <Link className="btn btn-primary mb-2" to="/additem" role="button">Add Item</Link>
            <table className="table text" style={{border: '2px solid grey'}}>
            <thead className="table-light">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    
                </tr>
            </thead>
            <tbody>
                {user.map((user, index)=>{
                  return <tr key={index} className="align-middle">
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-primary ms-2 mb-1" to={`/updateitem/${user.id}`} role="button">Update</Link>
                            <button className="btn btn-danger ms-2 mb-1" onClick={()=>{dispatch(deleteUser(user.id))}} type="button">Delete</button>
                        </td>
                   </tr>}
                )}
                
            </tbody>
            </table>
        </div>
    </div>
   </>
  )
}

export default Table