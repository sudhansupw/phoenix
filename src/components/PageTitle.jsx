import {Helmet} from "react-helmet"
import PropTypes from "prop-types"

import React from 'react'

const PageTitle = ({title}) => {
  return (
    <Helmet>
       <title>{title}</title> 
    </Helmet>
  );
};

PageTitle.PropTypes = {
    title: PropTypes.string,
}

export default PageTitle