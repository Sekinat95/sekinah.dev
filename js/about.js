function showNoOfWeeks(){
  const oneWeek =  7 * 24 * 60 * 60 * 1000; //days* hours*minutes*seconds*milliseconds
  const firstDate = new Date(2019, 9, 1);
  const secondDate = Date(Date.now())
  console.log(secondDate)
  secondDatee = secondDate.split(" ")
  
  secondDatee.length = 4
  const newSecondDate = formatDate(secondDatee);
  console.log(newSecondDate)
  const newNewSecondDate = new Date(newSecondDate)
  console.log(newNewSecondDate)
  const diffWeeks = Math.round(Math.abs((firstDate.getTime()- newNewSecondDate.getTime()) / (oneWeek)));
  return document.getElementById('no-of-weeks').textContent = diffWeeks
}
function showNoOfDays(){
  const oneDay =  24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2019, 8, 13);
  const secondDate = Date(Date.now())
  console.log(secondDate)
  secondDatee = secondDate.split(" ")
  
  secondDatee.length = 4
  const newSecondDate = formatDate(secondDatee);
  console.log(newSecondDate)
  const newNewSecondDate = new Date(newSecondDate)
  console.log(newNewSecondDate)
  const diffDays = Math.round(Math.abs((firstDate.getTime()- newNewSecondDate.getTime()) / (oneDay)));
  console.log(diffDays)
  return document.getElementById('no-of-days').textContent = diffDays
}
showNoOfDays()
showNoOfWeeks()


function formatDate(date) {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
      month = parseInt(month)
      day = parseInt(day)
      //console.log(year, month, day)

 
  let result =[year, month, day]
  result = Array.from(result);
  
  return result
}



 
