import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Linksocial = () => {
  return (
    <div className='header-social'>
        <a href='https://www.linkedin.com/in/kartikay-gupta-1498a7200/'target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Kartikay123'target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/kartikg052/'target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default Linksocial;