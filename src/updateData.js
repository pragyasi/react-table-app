// methods to process the data.

// removes user and updates the data to be displayed when clicked on delete user.
export function removeUser (updatedData, data, userData) {
  userData.forEach((curr, index) => {
    if (JSON.stringify(data) === JSON.stringify(curr)) {
      userData.splice(index, 1)
    }
  })
  return updatedData.filter(curr => {
    return JSON.stringify(data) !== JSON.stringify(curr)
  })
}
// sorts user in acending or descending order .
export function sortUser (direction) {
  //using closure to initialize the sort direction and update it on each click.
  let sort = direction || 'asc'
  return function (users) {
    if (sort === 'asc') {
      sort = 'desc'
      return users.slice().sort((a, b) => {
        return b.senderUuid - a.senderUuid
      })
    } else {
      sort = 'asc'
      return users.slice().sort((a, b) => {
        return a.senderUuid - b.senderUuid
      })
    }
  }
}
