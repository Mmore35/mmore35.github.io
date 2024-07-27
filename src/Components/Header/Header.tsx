import { ReactNode, useState } from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { GalleryIsVisable } from "../../util/const";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT ME", link: "/about" },
  ];

  const LinksList = () => {
    const listClassName =
      "bg-slate-900 bg-opacity-95 absolute left-0 w-full pl-9 transition-all duration-500 ease-in md:w-auto md:pl-0 md:static md:z-auto z-[-1] md:flex md:items-center " +
      (open ? "top-12" : "top-[-490px]");

    return (
      <ul className={listClassName}>
        {Links.map((link, index) => {
          const isActive = location.pathname === link.link;
          const buttonClassNames = isActive
            ? "text-indigo-600 underline-offset-4 underline"
            : "text-indigo-100 hover:bg-indigo-600 rounded-xl bg-opacity-90 p-1 duration-500";

          return (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={index}>
              <button
                style={{
                  textDecorationThickness: "2px",
                }}
                onClick={() => {
                  navigate(link.link);
                  setOpen(false);
                }}
                className={buttonClassNames}
              >
                {link.name}
              </button>
            </li>
          );
        })}
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
        className="absolute right-8 cursor-pointer md:hidden w-7 h-7"
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
          <div className="flex items-center justify-between bg-slate-900 py-4 px-7 md:flex md:px-10">
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
        className="btn hover:bg-violet-700 bg-violet-800 text-indigo-100 font-semibold px-3 py-1 rounded duration-500 md:ml-8 md:static"
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
