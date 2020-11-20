import './App.css'
import { messages } from './data.json'
import { removeDuplicates, currentPage } from './utility'
import { useState, useEffect } from 'react'
import { sortUser } from './updateData'
import { getHeader, getTableBody } from './tableRender'
const headerNames = ['Sender', 'Sent At', 'Action']

const userData = removeDuplicates(messages)
const perPageUserData = currentPage(userData, 'first')

function App () {
  let [userStore, userUpdateStore] = useState(perPageUserData())
  return (
    <div>
      <table className='userTable'>
        <thead id='header'>{getHeader(userStore, userUpdateStore)}</thead>
        <tbody>{getTableBody(userStore, userUpdateStore, userData)}</tbody>
      </table>
      <footer className='paging'>
        <button
          onClick={() => {
            const prev = perPageUserData('prev')
            userUpdateStore(prev)
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            const next = perPageUserData('next')
            userUpdateStore(next)
          }}
        >
          Next
        </button>
      </footer>
    </div>
  )
}
export default App
