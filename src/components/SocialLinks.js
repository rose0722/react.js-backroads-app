import React from 'react'

const SocialLinks = ({ href, icon, itemclass }) => {
  return (
    <li>
        <a href={href} target="_blank" rel="noopener noreferrer" className={itemclass}>
        <i className={icon}></i></a>
    </li>
  )

}

export default SocialLinks
