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
export function sortUser (users) {
  return users.slice().sort((a, b) => {
    return a.senderUuid - b.senderUuid
  })
}
