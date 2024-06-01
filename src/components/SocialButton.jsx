import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const icon2 = {
  facebook: faFacebook,
  twitter: faGithub,
  google: faLinkedin
};

const SocialButton = ({ icon }) => {
  const buttonClass = `btn btn-outline-dark mx-2 rounded-circle social-button`;
  return (
      <button className={buttonClass}>
            <FontAwesomeIcon icon={icon2[icon]}/>
      </button>
  );
};

export default SocialButton;
