import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'lib/elements/Grid';
import Icon from 'icon';
import {connect} from "react-redux";
import Signup from "../Popup/Signup";
import {openSignup} from "../../../store/actions/ModalControl";

const listMenu = [{
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
  link: '/',
  action: 'openModal'
}, {
  label: 'Partner Dashboard',
  link: '/'
}]

const Footer = ({showModalSignup, dispatch}) => {
  const actions = {
    openModal: (e) => {
      e.preventDefault();
      dispatch(openSignup(true));
    }
  }

  return (
    <footer className="bg-darkdrop text-white">
      <Container className="flex items-center py-4 justify-between">
        <img src="images/v-logo.png" className="w-32 md:w-52 mr-0 md:mr-12" alt="logo" />

        <nav className="flex-row flex-grow md:flex hidden">
          { listMenu.map((item, i) => (
            <Link
              className="mt-2 text-sm mr-6"
              to={ item.link } key={ i }
              onClick={item.action ? actions[item.action] : null}
            >
              { item.label }
            </Link>
          )) }
        </nav>

        <div className="flex">
          <Icon name="facebook" className="w-5 mr-4" />
          <Icon name="linkedin" className="w-5" />
        </div>
      </Container>

      <Container className="md:hidden flex">
        <nav className="-mx-2 justify-between flex flex-wrap pb-4 pt-2">
          { listMenu.map((item, i) => (
            <Link
              className="mx-2 mt-2 text-sm"
              to={ item.link } key={ i }
              onClick={item.action ? actions[item.action] : null}
            >
              { item.label }
            </Link>
          )) }
        </nav>
      </Container>

      <p className="bg-darkdrop-1 py-3 text-center text-gray-400">
        ©2020 - Viettonkin JSC
      </p>
      { showModalSignup && <Signup /> }
    </footer>
  );
}

function mapStateToProps(state) {
  return state.modalControl
}
export default connect(mapStateToProps)(Footer);
