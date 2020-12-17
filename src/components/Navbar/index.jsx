import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'icon';

const listMenu = [
  {
    label: 'Home',
    link: '/'
  }, {
    label: 'Service',
    link: '/'
  }, {
    label: 'How it works',
    link: '/'
  }, {
    label: 'Help',
    link: '/'
  }
]

const Navbar = () => {
  return (
    <div className="py-3 w-full bg-softdrop text-white">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <img src="images/logo.svg" className="w-32 md:w-52" alt="logo" />

        <div className="flex items-center mx-0 md:mx-16">
          <div className="bg-white h-10 w-8 flex justify-center items-center rounded-l-sm">
            <Icon name="search" className="w-3 h-3" />
          </div>

          <input className="h-10" />

          <button className="px-3 text-xs h-10 bg-orange rounded-r-sm">
            Search
          </button>
        </div>


        <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
          { listMenu.map((item, i) => (
            <Link
              className="mt-2 text-sm md:mt-0 mr-6"
              to={ item.link } key={ i }
            >
              { item.label }
            </Link>
          ))}

          <button className="flex items-center text-blue">
            <Icon name="user" className="w-3 h-3 mr-2" />
            Login
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
