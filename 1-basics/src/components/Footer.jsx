import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';


export const Footer = ({name, text}) => {
  
    //console.log(props), props is destructed;
    return (
    <div className='footer'>
        <button className = {name}>{text}</button>
    </div>
    )
}
// style = {{backgroundColor: color}} can be also added in the button above as style.
// validation of properties

Footer.propTypes = {
    name: PropTypes.string.isRequired,
    style:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}
// default PropType is possible if nothing is passed as in the above example for the properties 


//short cut for PropType

// import React from 'react'
// import PropTypes from 'prop-types'

// const Footer = props => {
//   return (
//     <div>Footer</div>
//   )
// }

// Footer.propTypes = {}

// export default Footer