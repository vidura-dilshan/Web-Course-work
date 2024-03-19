import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links12.css'

const NavigationLinks12 = (props) => {
  return (
    <nav className={`navigation-links12-nav ${props.rootClassName} `}>
      <span className="navigation-links12-text">{props.text}</span>
      <span className="navigation-links12-text1">{props.text1}</span>
      <span className="navigation-links12-text2">{props.text2}</span>
      <span className="navigation-links12-text3">{props.text3}</span>
      <span className="navigation-links12-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks12.defaultProps = {
  text3: 'Ambulance Service',
  text4: 'Prescription Scanner',
  text: 'Home',
  text1: 'Health Store',
  rootClassName: '',
  text2: 'Prescription Order',
}

NavigationLinks12.propTypes = {
  text3: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks12
