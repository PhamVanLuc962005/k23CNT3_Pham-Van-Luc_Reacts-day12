import React from 'react'
 
 export default function PvlListUser({renderPvlUsers}) {
 
     const PvlElements = renderPvlUsers.map((PvlItem, index)=>{
         return (
             <>
                 <tr key={index}> 
                     <td>{index+1}</td>
                     <td>{PvlItem.id}</td>
                     <td>{PvlItem.PvlFullName}</td>
                     <td>{PvlItem.PvlUserName}</td>
                     <td>{PvlItem.PvlPass}</td>
                 </tr>
             </>)
     })
   return (
     <div>
         <h2>Danh sách tài khoản</h2>
         <table className='table table-bordered'>
             <thead>
                 <tr>
                     <th>#</th>
                     <th>ID</th>
                     <th>FullName</th>
                     <th>UserName</th>
                     <th>Password</th>
                 </tr>
             </thead>
             <tbody>
                 {PvlElements}
             </tbody>
         </table>
     </div>
   )
 }