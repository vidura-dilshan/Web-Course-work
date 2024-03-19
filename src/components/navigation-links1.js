import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links1-navlink">
        {props.text}
      </Link>
      <Link to="/health-store-user" className="navigation-links1-navlink1">
        {props.text1}
      </Link>
      <Link to="/prescription-order" className="navigation-links1-navlink2">
        {props.text2}
      </Link>
      <span className="navigation-links1-text">{props.text3}</span>
      <span className="navigation-links1-text1">{props.text4}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text3: 'Ambulance Service',
  text4: 'Prescription Scanner',
  text: 'Home',
  text1: 'Health Store',
  rootClassName: '',
  text2: 'Prescription Order',
}

NavigationLinks1.propTypes = {
  text3: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks1
