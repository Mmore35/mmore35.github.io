import { ReactNode, useState } from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { GalleryIsVisable } from "../../util/const";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT ME", link: "/about" },
  ];

  const LinksList = () => {
    return (
      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-12" : "top-[-490px]"
        }`}
      >
        {Links.map((link, index) => (
          <li className="md:ml-8 md:my-0 my-7 font-semibold" key={index}>
            <button
              onClick={() => navigate(link.link)}
              className="text-indigo-100 hover:text-indigo-600 duration-500"
            >
              {link.name}
            </button>
          </li>
        ))}
        {GalleryIsVisable && <GalleryButton />}
      </ul>
    );
  };

  const NameLogo = () => {
    return (
      <div
        onClick={() => navigate("/")}
        className="font-bold text-2xl cursor-pointer flex items-center gap-1"
      >
        <CodeBracketIcon className="w-8 h-8 text-indigo-600" />
        <span className="ml-2 text-indigo-100">Michael Morel</span>
      </div>
    );
  };

  const OpenCloseIcon = () => {
    return (
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
      >
        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
      </div>
    );
  };

  type BannerProps = {
    children: ReactNode;
  };

  const Banner = ({ children }: BannerProps) => {
    return (
      <>
        <div className="shadow-md w-full fixed top-0 left-0 z-50">
          <div className="md:flex items-center justify-between bg-slate-900 py-4 md:px-10 px-7">
            {children}
          </div>
        </div>
        <div className="pt-16" />
      </>
    );
  };

  const GalleryButton = () => {
    return (
      <button
        onClick={() => navigate("/gallery")}
        className="btn hover:bg-violet-700 bg-violet-800 text-indigo-100 md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
      >
        GALLERY
      </button>
    );
  };

  return (
    <Banner>
      <NameLogo />
      <OpenCloseIcon />
      <LinksList />
    </Banner>
  );
};
