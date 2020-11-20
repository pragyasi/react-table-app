//methods to render table 
import { removeUser, sortUser } from './updateData'

//renders header and sorts data on click of sender uuid header 
export const getHeader = (userStore, userUpdateStore,data) => {
  return (
    <tr>
      <td
        key='Sender Uuid'
        onClick={() => {
          userUpdateStore(data(userStore));
        }}
      >
        Sender Uuid
        <i className="fas fa-sort"></i>
      </td>
      <td key='Sent At'>Sent At</td>
      <td key='Action'>Action</td>
    </tr>
  )
}
// renders table body and removes user on click of delete user.
export const getTableBody = (updatedData, userUpdateStore, userdata) => {
  return updatedData.map(data => {
    return (
      <tr key={data.uuid - data.content}>
        <td>{data.senderUuid}</td>
        <td>{data.timeStamp}</td>
        <td>
          <button
            onClick={props => {
              const update = removeUser(updatedData, data, userdata)
              userUpdateStore(update)
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  })
}
