import React from "react";
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import Logo from '../assets/img/md-logo.png';
import './navbar.css';
import { HomeIcon } from "./nav-comps/home";

import IosContactOutline from "react-ionicons/lib/IosContactOutline"
import IosSettingsOutline from "react-ionicons/lib/IosSettingsOutline"
import IosBriefcaseOutline from "react-ionicons/lib/IosPaperOutline"
import LogoGithub from "react-ionicons/lib/LogoGithub"
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin"

class Navbar extends React.Component {

  render () {
    return (
      <> <nav><div className="navbar"><div className="top-logo"><img className="small-logo" src={Logo}/></div><div className="nav-icons">
      <div className="helper">
      <ul>
      <HomeIcon/>
      <li data-text="WHOIS?">
      <IosContactOutline className="nav-ionicons" />
      </li>
      <li data-text="TECH">
      <IosSettingsOutline className="nav-ionicons" />
      </li>
      <li data-text="PROJECTS">
      <IosBriefcaseOutline className="nav-ionicons" />
      </li>
      </ul>
      <div className="spacer"/>
      <ul>
      <li>
      <LogoGithub className="nav-ionicons" />
      </li>
      <li>
      <LogoLinkedin className="nav-ionicons" />
      </li>
      </ul>
      </div>
      </div>
      </div>
      </nav> </>
    )
  }
}

export { Navbar }
