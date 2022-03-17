import ClassConnectImage from './Assets/Images/ClassConnect1.PNG'
import MosquitoImage from './Assets/Images/Task Viewnew.PNG'

const Projects = () => {
  return (
    <div className="">
      <Project image={ClassConnectImage} />
      <Project image={MosquitoImage} />
      <Project image={MosquitoImage} />
      <Project image={MosquitoImage} />
      <Project image={MosquitoImage} />
      <Project image={MosquitoImage} />
      <Project image={MosquitoImage} />
      <Project image={MosquitoImage} />
      <Project image={MosquitoImage} />
      <Project image={MosquitoImage} />
      {/* TODO make projects page, both projects on one screen with links to farther information */}
    </div>
  );
};

const Project = ({ image }) => (
  <div className="MainText">
    <h1>
        Class Connect
    </h1>
  </div>
);

export default Projects;