import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { logoutUser } from 'store/actions/Auth';
import { Link } from 'react-router-dom';
import { setCountryList, setCategoryList } from 'store/actions/GlobalState';
import { openSignin } from 'store/actions/ModalControl';
import { Container, Row } from 'lib/elements/Grid';
import { Authenticated, UnAuthenticated } from './UserMenu';
import SearchBar from 'lib/components/SearchInput/SearchBar';
import Icon from 'icon';
import { read } from 'utils/api';

const listMenu = [
  {
    label: 'Home',
    link: '/landing-page'
  }, {
    label: 'Service',
    link: '/service-providers'
  }, {
    label: 'How it works',
    link: '/#'
  }, {
    label: 'Help',
    link: '/faq'
  }
]

const navStyle = {
  mobile: 'flex-col w-full flex-grow text-right items-center top-10 z-20 bg-softdrop absolute',
  desktop: 'md:static md:flex md:mt-0 md:w-6/12 md:flex-row md:justify-end'
};

const Navbar = ({ auth, countryList, categoryList, logoutUser }) => {
  const [mobile, setMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countryList?.length) {
      read('countries').then(res => dispatch(setCountryList(res.data)));
    }

    if (!categoryList.length) {
      read('categories').then(res => dispatch(setCategoryList(res.data)));
    }
  }, [categoryList, dispatch, countryList]);

  return (
    <Container fluid className="py-2 bg-softdrop text-white">
      <Container>
        <Row className="md:text-sm text-md relative items-center justify-between">
          <Link to="/" className="md:w-2/12 w-4/12">
            <img src="/images/logo.svg" alt="logo" />
          </Link>

          <div className="relative md:block hidden w-4/12 md:pl-10">
            <SearchBar />
          </div>

          <button className="md:hidden" onClick={ () => setMenu(!mobile) }>
            <Icon name="menu" size={32} />
          </button>

          <nav className={ `${mobile ? 'flex' : 'hidden'} ${navStyle.desktop} ${navStyle.mobile}` }>
            <div className="px-4 w-full">
              <div className="relative md:hidden py-5">
                <SearchBar />
              </div>
            </div>

            { listMenu.map((item, i) => (
              <Link
                onClick={ () => setMenu(!mobile) }
                className="md:mx-4 pr-4 md:pr-0 whitespace-nowrap my-1 w-full md:my-0 md:w-auto"
                to={ item.link } key={ i }
              >
                { item.label }
              </Link>
            )) }

            <div className="flex justify-between p-2 w-full md:ml-5 md:w-auto md:mt-0 mt-3">
              { !auth ? <UnAuthenticated signin={ () => dispatch(openSignin(true)) } /> : <Authenticated logout={ () => logoutUser() } /> }
            </div>
          </nav>
        </Row>
      </Container>
    </Container>
  );
}
const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  countryList: state.globalState.countryList,
  categoryList: state.globalState.categoryList
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
