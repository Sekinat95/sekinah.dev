class Data{
    async getAllProjects(url){
        const allProjectsResponse = await fetch(url)

        const allProjectsData = await allProjectsResponse.json()

        return {
            allProjectsData
        }

    }
  
  }