import React from 'react';
import { Link } from 'react-router-dom';
import { openModalSignin } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Container from 'components/Container';
import Icon from 'icon';

const listMenu = [
  {
    label: 'Home',
    link: '/#'
  }, {
    label: 'Service',
    link: '/#'
  }, {
    label: 'How it works',
    link: '/#'
  }, {
    label: 'Help',
    link: '/#'
  }
]

const Navbar = ({ dispatch }) => {
  return (
    <Container fluid className="py-3 bg-softdrop text-white">
      <Container className="flex flex-col md:items-center md:justify-between md:flex-row">
        <img src="images/logo.svg" className="w-32 md:w-52" alt="logo" />

        <div className="flex items-center w-full md:ml-10">
          <div className="bg-white h-10 w-10 flex justify-center items-center rounded-l-sm">
            <Icon name="search" size={ 12 } color="#333" />
          </div>

          <input
            className="h-10 w-6/12"
            placeholder="What service are you looking for?"
          />

          <button className="px-5 text-xs h-10 bg-orange rounded-r-sm">
            Search
          </button>
        </div>

        <nav className="flex-col w-full flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row items-center">
          { listMenu.map((item, i) => (
            <Link
              className="mt-2 text-sm md:mt-0 mx-6"
              to={ item.link } key={ i }
            >
              { item.label }
            </Link>
          ))}

          <button className="flex items-center text-blue ml-10" onClick={ () => dispatch(openModalSignin(true)) }>
            <Icon name="user" size={ 12 } color="#20BFEF" className="mr-2" />
            Login
          </button>
        </nav>
      </Container>
    </Container>
  );
}

export default connect()(Navbar);
