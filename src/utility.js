//utility file with functions to process data file
import moment from 'moment'

//method to format date using moment.js
const formatDate = date => {
  let formattedDate = ''
  if (date) {
    formattedDate += moment(date).format('dddd MMMM DD , YYYY [at] hh:mm A ')
  }
  return formattedDate
}

//to add formatted timeStamp to each user object
const addData = message => {
  let formatTime = formatDate(message.sentAt)
  let newObj = Object.assign({}, message)
  newObj['timeStamp'] = formatTime
  return newObj
}

// depuplicate the message object.
export const removeDuplicates = messages => {
  let result = []
  let map = new Map()
  /*using map to store uuid as key and array list of content as it's value .Iterating through messages and checking if the uuid key with same content exists or not . If it doesn't exist then only format date and add timestamp for that object and push it to an array else discard that object.*/
  messages.forEach(curr => {
    if (map.get(curr.uuid) === undefined) {
      result.push(addData(curr))
      map.set(curr.uuid, [curr.content])
    } else if (
      map.get(curr.uuid) &&
      !map.get(curr.uuid).includes(curr.content)
    ) {
      result.push(addData(curr))
      map.get(curr.uuid).push(curr.content)
    }
  })
  //final result which contains deduplicated messages.
  return result
}

// method to implement pagination
export function pagination (userData) {
  /*implemented closure to retain initial offsets for pagination and then update them on each next and previous click.*/
  let offsetFirst = 0
  let offsetLast = userData.length < 5 ? userData.length : 5 // if initial length is less than 5.
  return function (type) {
    if (type === 'next' && userData.length !== 0) {
      offsetFirst += 5 // increment first offset 
      offsetLast = offsetFirst + 5 // increment last offset 
      return userData.slice(offsetFirst, offsetLast)
    } else if (offsetFirst && type === 'prev') {
      offsetFirst -= 5  // decrement first offset 
      offsetLast = offsetFirst + 5  // decrement last offset 
      return userData.slice(offsetFirst, offsetLast) 
    } else {
      //for landing page use initial offset
      const curr = userData.slice(offsetFirst, offsetLast)
      return curr
    }
  }
}
