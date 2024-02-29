import { useState } from "react";
import NewProjects from "./Components/NewProjects";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebBar from "./Components/ProjectsSideBar";
import SelectedProjects from "./Components/SelectedProjects";


function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
     projects:[],
     tasks:[]
  })
  function handleAddTasks(text)
  {
    setProjectState((prevState)=>{
      const TaskId=Math.random();
      const newTask={
        text:text,id:TaskId,projectId:prevState.selectedProjectId
      }
      return {
        ...prevState, tasks:[newTask,...prevState.tasks]
      }
    })
  }
  function handleDeleteTasks(id)
  {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=>task.id!==id
        )
      }
    })
  }
  function handleStartAddProject()
  {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    })
  }

  function handleCancelProject()
  {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
      }
    })
  }
  function handleSelectProject(id)
  {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:id,
      }
    })
  }
  function handleAddProjects(projectData)
  {
    setProjectState((prevState)=>{
      const projectId=Math.random();
      const newProject={
        ...projectData,id:projectId
      }
      return {
        ...prevState,selectedProjectId:undefined, projects:[...prevState.projects,newProject]
      }
    })
  }

  function handleDeleteProject(id)
  {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: prevState.projects.filter((project)=> project.id!==prevState.selectedProjectId
        )
      }
    })
  }

  const selectedProject=projectState.projects.find(project=> project.id === projectState.selectedProjectId )
  let content=<SelectedProjects onDeleteTasks={handleDeleteTasks} onAddTasks={handleAddTasks} tasks={projectState.tasks} project={selectedProject} onDelete={handleDeleteProject}/>;
  if(projectState.selectedProjectId===null)
  {
    content=<NewProjects  onAdd={handleAddProjects} onCancel={handleCancelProject}/>
  }
  else if(projectState.selectedProjectId===undefined)
  {
    content=<NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebBar selectedProjectId={projectState.selectedProjectId} onSelectProject={handleSelectProject} projects={projectState.projects} onStartAddProject={handleStartAddProject}/>
      {/* <NoProjectSelected onStartAddProject={handleStartAddProject}/> 
      */}
      {content}
    </main>
  );
}

export default App;
