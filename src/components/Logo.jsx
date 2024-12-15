import { Link } from "react-router-dom";
import { logoLight, logoDark } from "../assets/assets";
import PropTypes from "prop-types";


import React from 'react'

function Logo({ classes = ''}) {
  return (
    <Link
    to='/'
    className={`min-w-max max-w-max h-[24px] ${classes}`}
    >
     <img
      src={logoLight}
      width={133}
      height={24}
      alt="phoenix logo" 
      className='dark:hidden' 
      />

     <img
      src={logoDark}
      width={133}
      height={24}
      alt="phoenix logo" 
      className='hidden dark:block' 
      />
    </Link>
  )
};

Logo.propTypes = {
    classes:PropTypes.string,
};

export default Logo;