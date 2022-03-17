import ClassConnectImage from './Assets/Images/ClassConnect1.PNG'
import MosquitoImage from './Assets/Images/Task Viewnew.PNG'

const Projects = () => {
  return (
    <div className="">
      <Project image={ClassConnectImage} projectName={'Class Connect'}/>
      <Project image={MosquitoImage} projectName={'Mosquito'}/>
      {/* TODO make projects page, both projects on one screen with links to farther information */}
    </div>
  );
};

const Project = (props) => (
  <div className="MainText">
    <h1>
        {props.projectName}
    </h1>
    <img src={props.image}/>
  </div>
);

export default Projects;