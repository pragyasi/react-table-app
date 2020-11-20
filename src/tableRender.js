import {removeUser , sortUser} from './updateData'

export const getHeader = (userStore , userUpdateStore) =>{
  return <tr >
         <td key='Sender Uuid' onClick={()=>{
            const data = sortUser(userStore);
            userUpdateStore(data)}}>Sender Uuid</td>
         <td key='Sent At' >Sent At</td>
         <td key='Action' >Action</td>
         </tr>
}

export const getTableBody = (updatedData , userUpdateStore , userdata) =>{
 return updatedData.map((data)=>{
  return <tr key={data.uuid-data.content}>
    <td >{data.senderUuid}</td>
    <td >{data.timeStamp}</td>
    <td ><button onClick={(props)=>{
      const update= removeUser(updatedData , data , userdata)
      userUpdateStore(update);
      }}>Delete</button></td>
  </tr>
 })
}

