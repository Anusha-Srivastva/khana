import{useState} from "react"
import Sidebar from "./Sidebar"

import {faHome,faList,faCog} from "@fortawesome/free-solid-svg-icons"
export default function Navbar(){
    const[showSidebar,setShowSidebar] =useState(false)
    const links = [
        {
            name: "Home",
            path: "/",
            icons:faHome
        },
        {
            name: "Recipes" ,
            path: "/recipes",
            icons: faList
        },
        {
            name:"Settings",
            path: "/settings",
            icons: faCog
        }

    ]
    return(
      <>
         <div className="navbar container">
          <a href="#!" className="logo">F<span>oo</span>oodiesHub</a>
          <div className="nav-links">
          {
            links.map(link =>(
                <a href="#!"  key={links.name}>{links.name}</a>

            ) )
          }
            {/* <a href="#!">Home</a>
            <a href="#!">Recipes</a>
            <a href="#!">Settings</a> */}
          </div>
          <div onClick={() =>setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" :"sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
       </div>
       <Sidebar links={links} />
      </>
    )
    }
    