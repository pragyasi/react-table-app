function newUserData(updatedData , props){
 const newData = updatedData.filter((curr)=>{
    return JSON.stringify(curr) !== JSON.stringify(props.original)
  })
return newData;
}
export {newUserData}