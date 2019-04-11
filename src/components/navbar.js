import React from "react";
import logo from '../assets/md-logo.png';
import './navbar.css';
import IosHomeOutline from "react-ionicons/lib/IosHomeOutline"
import IosContactOutline from "react-ionicons/lib/IosContactOutline"

export default () => (
<> <nav><div className="navbar"><div className="top-logo"><img className="small-logo" src={logo}/></div><div className="nav-icons">
<div className="helper">
<ul>
<li>
<IosHomeOutline className="nav-ionicons" />
</li>
<li>
<IosContactOutline className="nav-ionicons" />
</li>
</ul>
</div>
</div>
</div>
</nav></>
)
