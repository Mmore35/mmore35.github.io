import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="... p-1 h-screen fixed w-1/6">
      <SideBarIcon icon={<FaFire className='' size="52" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      {/* TODO: get real icons and set links with email*/}
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group basis-1/6">
    {icon}
  </div>
);

export default SideBar;