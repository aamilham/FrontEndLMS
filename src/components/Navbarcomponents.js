import React from "react";
import "./Navbarcss.css";
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/feather/search'

function Navbarcomponents() {

  return (
    <div>
      <div class="navbar"></div>
      <div class="gambarlogo"></div>
      <div class="searchbar">
        <input type="text" placeholder="Search" class="searchbarbox"></input>
      </div>
      <span class="searchicon">
        <Icon icon={search} size={24} />
      </span>

      <div class="profilephoto"></div>
      <div class="profile">
        <div class="profilename">Denada Soetanto</div>
        <div class="profilenim">G6012119800</div>
      </div>
    </div>
  );
}

export default Navbarcomponents;
