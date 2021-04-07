import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons  from "react-icons/fa";
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: "Menu",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Registro",
    path: "/visitor",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Estadistica",
    path: "/analitics",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Documentos",
    path: "/documents",
    icon: <FaIcons.FaAirFreshener />,
    cName: "nav-text",
  },
  {
    title: "ANP",
    path: "/documentation",
    icon: <AiIcons.AiFillAlert />,
    cName: "nav-text",
  },
  {
    title: "Mapa",
    path: "/maps",
    icon: <AiIcons.AiOutlineHeatMap />,
    cName: "nav-text",
  },
  {
    title: "Configuracion",
    path: "/configuration",
    icon: <IoIcons.IoMdMap/>,
    cName: "nav-text",
  }
];