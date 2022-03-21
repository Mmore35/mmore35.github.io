import { MdEmail } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaUserGraduate, FaGamepad } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="... p-1 h-screen fixed w-1/6">
      <a>
      <SideBarIcon icon={<FaUserGraduate size="52" />} text="About Me" />
      </a>
      <a>
      <SideBarIcon icon={<AiOutlineAppstore size="60" />} text="My Projects"/>
      </a>
      <a>
      <SideBarIcon icon={<FaGamepad size="60" />} text="My Games"/>
      </a>
      <a href='mailto:mmore35@lsu.edu'>
      <SideBarIcon icon={<MdEmail size="60" />} text="Email Me" onClick ={mailMe}/>
      </a>
      {/* TODO: set links*/}
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group basis-1/6">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const mailMe = ({ }) => {
  return (
    <a href={`mailto:mmore35@lsu.edu`}/>
  );
};


export default SideBar;