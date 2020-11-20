import './App.css'
import { messages } from './data.json'
import { removeDuplicates, pagination } from './utility'
import { useState } from 'react'
import { sortUser } from './updateData'
import { getHeader, getTableBody } from './tableRender'

/* Iinitalizing userData and perUserData so to avoid calling it again on each rerender*/
const userData = removeDuplicates(messages) // depuplicate the data.json
const perPageUserData = pagination(userData, 'first') // get landing page data
const sortDir = sortUser('asc');// initilizing the sort direction 

/*using functional components instead of react class components because here e don't require any react lifecycle methods . Also , In a production environment I would use reacts useReducer/redux library as application store.*/
function App () {
  //setting up react hooks to intialize the page and render it on any event.
  let [userStore, userUpdateStore] = useState(perPageUserData());
  
  /*rendering table headers using getHeader and body using getTable method and it renders on previous nd next click .
  implemented paging using prev and next button and by calling perPageUserData on it's click .*/
  return (
    <div>
      <table className='userTable'>
        <thead id='header'>{getHeader(userStore, userUpdateStore ,sortDir)}</thead>
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
