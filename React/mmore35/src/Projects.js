import ClassConnectImage from './Assets/Images/ClassConnect1.PNG'
import MosquitoImage from './Assets/Images/Task Viewnew.PNG'

const CCDescription = "Modernizing Education Software";
const MosDescription = "Productivity Insurance";

const Projects = () => {
    return (
        <div className="MainText">
            <h1>
                Projects!
            </h1>
            <Project image={ClassConnectImage} projectName={'Class Connect Flutter App!'} description={CCDescription} />
            <Project image={MosquitoImage} projectName={'Mosquito'} description={MosDescription} />
            {/* TODO make projects page, both projects on one screen with links to farther information */}
        </div>
    );
};

const Project = (props) => (
    <div className="MainText">
        <h1 className='text-xl'>
            {props.projectName}
        </h1>
        <div className="MainText grid grid-rows-3 grid-flow-col gap-4">
        <img className='row-span-3 col-span-2 max-w-full rounded-xl p-1 bg-slate-900 border-stone-800 border-2' src={props.image} />
        <div className=''/>
            <h3 className='row-span-1 col-span-1 sm: min-w-0'>
                {props.description}
            </h3>
        </div>
        <br/>
    </div>
);

export default Projects;