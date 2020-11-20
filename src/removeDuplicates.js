import moment from "moment";

const formatDate = date => {
  let formattedDate = "";
  if (date) {
    formattedDate += moment(date).format("dddd MMMM DD , YYYY [at] hh:mm A ");
  }
  return formattedDate;
};

const addData = (message) =>{
  let formatTime = formatDate(message.sentAt);
  let newObj = Object.assign({} , message);
  newObj['timeStamp'] = formatTime
  return newObj;
}

export const removeDuplicates = (messages) => {
  let result = [];
  let map = new Map();
   messages.forEach((curr)=>{   
     if(map.get(curr.uuid) === undefined){ 
       result.push(addData(curr))
       map.set(curr.uuid , [curr.content])
     }else if(map.get(curr.uuid) && !map.get(curr.uuid).includes(curr.content)){
       result.push(addData(curr));
       map.get(curr.uuid).push(curr.content)
     }

   })
  return result;
};
export function currentPage(userData ){
 let offsetFirst = 0 ;
 let offsetLast = userData.length <5 ? userData.length : 5 ;
   return function(type){
     if(type ==='next' && userData.length!==0){
     offsetFirst+=5 ;
     offsetLast =offsetFirst + 5 ;   
     return userData.slice(offsetFirst , offsetLast)
   }else if(offsetFirst && type === 'prev' ){
     userData.length+=5;
     offsetFirst-=5 ;
     offsetLast = offsetFirst + 5 ;
     return  userData.slice(offsetFirst , offsetLast);
   }else{
     const curr =  userData.slice(offsetFirst , offsetLast);
     return curr
   }
   }
}