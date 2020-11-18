import './App.css';
import {messages} from './data.json';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import {removeDuplicates} from  './removeDuplicates';
import {useState , useEffect} from 'react';
import {newUserData} from './updateData'


function App() {
  const userData = removeDuplicates(messages);
  let [updatedData , updateData] = useState(userData) 
  const columns = [
    {
      Header : 'User Id',
      accessor : "senderUuid",
      style : {
        textAlign : 'center' 
      }
  },
  {
      Header : 'Sent At',
      accessor : "timeStamp",
      style : {
        textAlign : 'center' 
    }
  },
  {
      Header : 'Delete User',
      Cell : (props)=>{
        return <button 
        onClick = {()=>{
        updatedData = newUserData(updatedData , props)
        updateData(updatedData);
          }
        }>
        Remove User</button>
      } 
  }
  ]
  return (
         <ReactTable 
         columns={columns}
         data = {updatedData}
         defaultPageSize = {5}
         ></ReactTable>
  )
}

export default App;
