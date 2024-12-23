import React , { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function UserTable() {
  const navigate = useNavigate();
 
  return (
    <>
    <div>
        <button className=" btn btn-success" onClick={()=>navigate('/create-user')}>Create</button>
    </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    </>
    
  );
}

export default UserTable;
