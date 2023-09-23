import logo from '../logo.svg';
import {Toggle} from '../components/themeToggle'
import './Nav.css';
import * as React from 'react';
import { ThemeContext } from '../App';
type NavProps = {
  checked: boolean;
  onChange: any;
  
};


const Nav:React.FunctionComponent<NavProps> = ({ onChange, checked }) => {
    return (
      <div className="nav-container">
        <div className="left-group">
          <img src={logo} className={checked?"App-logo-dark":"App-logo-light"} alt="logo" />
        </div>
        <div className="right-group">
        <Toggle checked={checked} onChange = {onChange} /> 
        </div>
        <div>

        </div>
      </div>
    );
  }

  export default Nav;