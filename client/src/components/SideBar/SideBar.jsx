import React, { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHome, AiOutlineGateway, AiTwotoneBank } from "react-icons/ai";
import { FaDollarSign } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import logoAgrovalor from "../../assets/agricultura.png"
import { PropertyContext } from "../contexts/PropertyContext";
import { BatchContext } from "../contexts/BatchContext";

export default function SideBar() {

  const { propertyState } = useContext(PropertyContext)

  const { batchState } = useContext(BatchContext)

  const username = JSON.parse(localStorage.getItem('user'));

  const menus = [
    { name: "Dashboard", link: "/home", icon: MdOutlineDashboard },
    { name: username ? username.name : "Usuário", link: "/user", icon: AiOutlineUser },
    { name: propertyState ? propertyState.name : "Propriedades", link: "/property", icon: AiFillHome, margin: true },
    { name: batchState ? batchState.name : "Selecione um Lote", link: "/batch", icon: AiOutlineGateway },
  ];

  if (batchState && propertyState) {
    menus.push(
      { name: "Despesas", link: "/expense", icon: FaDollarSign },
      { name: "Produção", link: "/production", icon: FiTruck },
      { name: "Financeiro", link: "/finance", icon: AiTwotoneBank }
    );
  }

  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 h-screen">
      <div
        className={`bg-slate-900 min-h-screen ${open ? "w-64" : "w-16"
          } duration-500 text-gray-100 px-4 `}
      >
        <div className="py-3 flex flex-wrap">
          <div className={` ${!open ? "hidden" : "p-2"}`}>
            <Logo></Logo>
          </div>
          <div className="flex p-2 mx-auto">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className={` ${open ? "hidden" : "w-full"}`}>
            <img className="w-6 h-6 m-1.5" src={logoAgrovalor} alt="" />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
