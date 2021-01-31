import React, { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { logoutUser } from 'store/actions/Auth';
import { Link, withRouter } from 'react-router-dom';
import { setCountryList, setSubCategoryList, setCategoryList } from 'store/actions/GlobalState';
import { openSignin } from 'store/actions/ModalControl';
import { Container, Row } from 'lib/elements/Grid';
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

const AuthMenu = ({ logout }) => (
  <Fragment>
    <Link to="/dashboard" className="md:mx-4 pr-4 md:pr-0 my-1 w-full md:my-0 md:w-auto">
      Dashboard
    </Link>

    <button className="flex items-center ml-auto text-blue" onClick={ logout } >
      <Icon name="power-off" size={ 12 } color="#20BFEF" className="mr-2" />
      Logout
    </button>
  </Fragment>
);

const UnAuthMenu = ({ signin }) => (
  <button className="flex items-center ml-auto text-blue" onClick={ signin } >
    <Icon name="user" size={ 12 } color="#20BFEF" className="mr-2" />
    Login
  </button>
);

const Navbar = ({ auth, countryList, categoryList, subCategoryList, logoutUser }) => {
  const [mobile, setMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countryList?.length) {
      read('countries').then(res => dispatch(setCountryList(res.data)));
    }

    if (!subCategoryList?.length && !categoryList.length) {
      read('categories').then(res => {
        let categories = [];
        res.data.map(({ SubCategory }) => categories.push(...SubCategory));
        dispatch(setSubCategoryList(categories));
        dispatch(setCategoryList(res.data));
      });
    }
  }, [subCategoryList, categoryList, dispatch, countryList]);

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

            <div className="flex justify-between p-2 w-full md:ml-7 md:w-auto md:mt-0 mt-3">
              { !auth ? <UnAuthMenu signin={ () => dispatch(openSignin(true)) } /> : <AuthMenu logout={ () => logoutUser() } /> }
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
  categoryList: state.globalState.categoryList,
  subCategoryList: state.globalState.subCategoryList
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Navbar));
