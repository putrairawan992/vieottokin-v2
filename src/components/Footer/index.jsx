import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'icon';

const listMenu = [
  {
    label: 'Terms of Use',
    link: '/'
  }, {
    label: 'Privacy Policy',
    link: '/'
  }, {
    label: 'Contact',
    link: '/contact'
  }, {
    label: 'Service Standard (ISO)',
    link: '/'
  }, {
    label: 'Partnership',
    link: '/'
  }, {
    label: 'Partner Dashboard',
    link: '/'
  }
]

const Footer = () => {
  return (
    <footer className="bg-darkdrop text-white">
      <div className="flex items-center max-w-screen-xl mx-auto py-4">
        <img src="images/logo.svg" className="w-32 md:w-52 mr-0 md:mr-12" alt="logo" />

        <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:flex-row">
          { listMenu.map((item, i) => (
            <Link
              className="mt-2 text-sm md:mt-0 mr-6"
              to={ item.link } key={ i }
            >
              { item.label }
            </Link>
          )) }
        </nav>

        <div className="flex">
          <Icon name="facebook" className="w-5 mr-4" />
          <Icon name="linkedin" className="w-5" />
        </div>
      </div>

      <p className="bg-darkdrop-1 py-3 text-center text-gray-400">
        ©2020 - Viettonkin JSC
      </p>
    </footer>
  )
}

export default Footer;
