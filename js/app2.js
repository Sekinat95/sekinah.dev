
const data = new Data;
const projectUi = new UI;
window.addEventListener('DOMContentLoaded',(e)=>{
    
  data.getAllProjects('./projects.json').then((dataUnit)=>{
      console.log(dataUnit.allProjectssData)
      projectUi.showProjects(dataUnit.allProjectsData)
  })
 
  e.preventDefault()
})



