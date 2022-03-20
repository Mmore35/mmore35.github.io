import ClassConnectImage from './Assets/Images/ClassConnect1.PNG'
import MosquitoImage from './Assets/Images/Task Viewnew.PNG'

const CCDescription = "Modernizing Education Software";
const MosDescription = "Productivity Insurance";

const Projects = () => {
    return (
        <div className="MainText text-3xl">
            <h1>
                Projects!
            </h1>
            <Project image={ClassConnectImage} projectName={'Class Connect Flutter App'} description={CCDescription} link={'link'}/>
            <Project image={MosquitoImage} projectName={'Mosquito Windows Form App'} description={MosDescription} link={'link'}/>
        </div>
    );
};

const Project = (props) => (
    <div className="MainText">
        <h1 className='text-xl'>
            {props.projectName}
        </h1>
        <div className="MainText grid grid-rows-3 grid-flow-col">
            <img className='row-span-3 col-span-2 max-w-full rounded-xl p-1 bg-slate-900 border-stone-800 border-2 sm: min-w-smallImg' src={props.image} />
            <div className='' />
            <h3 className='col-start-1 row-start-4'>
                {props.description}
            </h3>
            <h3 className='col-start-2 row-start-4'>
                Learn More Here
            </h3>
        </div>

        <br />
    </div>
);

export default Projects;