class UI{

    showProjects(projects){
        let output = ''
        projects.forEach(project => {
            output += `
            <div class="row" style="border: 0.2px var(--primary-color) solid; padding: 5px;" >
              <div class="seven columns">
                <img src="${project.image}" >
                <a href="${project.github_url}" target = "_blank" class="button " >check it out</a>
              </div>
              <div class="five columns">
                <h3 class="color-primary" >${project.title}</h3>
                <small>completed on: ${project.date_finished}</small>
                <p class="l-heading" >${project.synopsis}</p>
                
                <h5 class="color-primary" >Technologies Used</h5>
                <span class="tech" >${project.tech[0]}</span>
                <span class="tech"  >${project.tech[1]}</span>
                <span class="tech"  >${project.tech[2]}</span>
                <span class="tech"  >${project.tech[3]}</span>
                
              </div>
            </div>
            <br>`
            document.querySelector('.project-container').innerHTML = output;
        });
}
}