import SideBar from './SideBar';
import AboutPage from './AboutPage';
import Projects from './Projects';

const FullPage = () => {
    return (
        <body className='bg-BackGround-100 flex flex-row'>
        <div className="basis-1/6 bg-stone-900">
          <SideBar/>
        </div>
        <div className='basis-5/6'>
        <div className=''>
        <AboutPage/>
        </div>
        <div className='h-plushalf'>
        <Projects/>
        </div>
        {/* TODO: make React the front page with a link to the html site */}
        {/* TODO: games */}
        </div>
        </body>
    );
};

export default FullPage;