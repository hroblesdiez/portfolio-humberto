import { FaFileCode } from 'react-icons/fa'
import SectionTitle from '../General/SectionTitle'
import CategoriesButtons from './CategoriesButtons'
import ProjectsResults from './ProjectsResults'
import projects from './Data'
import { useEffect, useState } from 'react'


const Projects = () => {

  const[projectsToShow, setProjectsToShow] = useState([projects])
  const[isActive, setIsActive] = useState("1")

  const showProjects = (category => {
    const projectsFiltered = projects.filter(project => project.category.includes(category))
    setProjectsToShow(projectsFiltered)
  })

  const handleClick = (e) => {
    let categorySelected = e.target.innerHTML.toLowerCase().replace(/ /g, "");
    showProjects(categorySelected)
    setIsActive(e.target.dataset.id)
    if(e.target.dataset.id !== "1") {
      document.querySelector('li[data-id="1"]').style.backgroundColor = '#0000000d';
    } else if(e.target.dataset.id === "1") {
      document.querySelector('li[data-id="1"]').style.backgroundColor = '#1cd8c9';
    }
  }

  useEffect(() => {
    showProjects('all')
    document.querySelector('li[data-id="1"]').style.backgroundColor = '#1cd8c9';
  }, [])

  return (
      <div className="w-full pb-10 px-4 md:px-20 lg:px-36" name='projects'>
          <SectionTitle icon={<FaFileCode size="28" />} text='My Projects' />
          <div className='w-full'>
            <CategoriesButtons onclick={handleClick} isActive={isActive} />
            <ProjectsResults projects={projectsToShow}/>
          </div>
      </div>
  )
}

export default Projects