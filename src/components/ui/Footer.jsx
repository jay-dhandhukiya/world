import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import  FootersAPI  from "../../api/FooterAPI";
export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <div className="bg-gray-800">
      <div className="text-white w-full py-4 grid grid-cols-1 md:grid-cols-3 gap-4 sm:px-[1%] xl:px-[1%]">
        {FootersAPI.map((footer) => {
          return (
            <div className="flex px-[20%] gap-4 sm:justify-center items-center">
              <h1 className="text-3xl text-blue-600">{footerIcon[footer.icon]}</h1>
              <div className="flex flex-col">
                <p className="font-bold pb-2">{footer.title}</p>
                <p className="text-sm text-gray-400 font-semibold">{footer.details}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="w-full text-white flex flex-col justify-between items-center py-6 px-8 bg-gray-800 sm:px-[10%] xl:px-[15%]">
            <div className="">
              <p>
                Copyright &copy; 2024, All Right Reserved 
                <NavLink to="" target="_blank">
                  <span className="text-blue-600"> example.com</span>
                </NavLink>
              </p>
            </div>

            <div className="">
              <ul className="flex gap-4 text-sm sm:text-md pt-4 ">
                <li className="hover:text-blue-600"><NavLink to="/">Home</NavLink></li>
                <li className="hover:text-blue-600"><NavLink to="https://www.instagram.com/JAY_DHANDHUKIYA_14/" target="_blank">Social</NavLink></li>
                <li className="hover:text-blue-600"><NavLink to="" target="_blank">Source Code</NavLink></li>
                <li className="hover:text-blue-600"><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
      </div>
    </div>
  )
}

export default Footer
