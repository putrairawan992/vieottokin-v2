import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { setCountryList, setCategoryList } from 'store/actions/GlobalState';
import { openSignin } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import { Container, Row } from 'lib/elements/Grid';
import SearchInput from 'lib/components/SearchInput';
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
  mobile: 'flex-col w-full flex-grow text-right items-center top-12 z-20 bg-softdrop absolute',
  desktop: 'md:static md:flex md:mt-0 md:w-6/12 md:flex-row md:justify-end'
};

const Navbar = ({ dispatch, auth, countryList, categoryList }) => {
  const [mobile, setMenu] = useState(false);

  useEffect(() => {
    if (!countryList?.length) {
      read('countries').then(res => dispatch(setCountryList(res.data)));
    }

    if (!categoryList?.length) {
      read('categories').then(res => {
        let categories = [];
        res.data.map(({ SubCategory }) => categories.push(...SubCategory));
        dispatch(setCategoryList(categories));
      });
    }
  }, []);

  return (
    <Container fluid className="py-3 bg-softdrop text-white">
      <Container>
        <Row className="md:text-sm text-md relative items-center justify-between">
          <Link to="/" className="md:w-2/12 w-4/12">
            <img src="/images/logo.svg" alt="logo" />
          </Link>

          <div className="relative md:block hidden w-4/12 md:pl-10">
            <SearchInput />
          </div>

          <button className="md:hidden" onClick={ () => setMenu(!mobile) }>
            <Icon name="menu" size={32} />
          </button>

          <nav className={ `${mobile ? 'flex' : 'hidden'} ${navStyle.desktop} ${navStyle.mobile}` }>
            <div className="px-4 w-full">
              <div className="relative md:hidden">
                <SearchInput />
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

            <div className="text-blue flex justify-between py-2 px-4 w-full md:ml-10 md:w-auto md:mt-0 mt-3">
              { !auth.isAuthenticated ? <button
                className="flex items-center"
                onClick={ () => dispatch(openSignin(true)) }
              >
                <Icon name="user" size={ 12 } color="#20BFEF" className="mr-2" />
                Login
              </button> :
              <button className="flex items-center">
                <img src="/images/demo-user.png" alt="user" className="w-10 object-cover md:w-12" />
                <Icon name="triangle" size={ 12 } className="ml-10" />
              </button> }
            </div>
          </nav>
        </Row>
      </Container>
    </Container>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  countryList: state.globalState.countryList,
  categoryList: state.globalState.categoryList
});

export default withRouter(connect(mapStateToProps)(Navbar));
