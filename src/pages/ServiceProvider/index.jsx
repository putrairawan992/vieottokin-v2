import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { read } from 'utils/api';
import Breadcrumb from 'lib/components/Breadcrumb';
import FilterSidebar from './FilterSidebar';
import Icon from 'icon';

const ServiceProvider = ({ serviceFilter }) => {
  const { search, categoryId, country, city } = serviceFilter;
  const [service, setService] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resServices = await read(`services?&search=${search}&category_id=${categoryId}&country=${country}&city=${city}`);
      const resCategory = await read('categories');
      resCategory.data.map(({ SubCategory }) => setCategory(state => [...state, ...SubCategory]));
      setService(resServices.data.results);
    };

    fetchData();
  }, [categoryId, country, city, search]);

  return (
    <Fragment>
      <Breadcrumb base={[ 'Home' ]} current="Search" />

      <Container className="md:px-6 lg:px-8 py-20">
        <Row>
          <Col md={3} className="md:px-8 border-0 md:border-r">
            <FilterSidebar />
          </Col>

          <Col md={9} className="md:px-8 mt-12 md:mt-0">
            <p className="text-gray-500 mb-5 text-sm">
              A total of <b>{ service.count }</b> service providers
            </p>

            { service.rows?.map((item, i) => (
              <Row
                className="bg-white shadow rounded-md px-3 py-4 border-l-4 border-softdrop border mb-5"
                key={ i }
              >
                <Col xs={2} md={1}>
                  <img
                    src={ item.partner.avatar }
                    alt={ item.partner.companyName }
                    className="rounded-full w-11 h-11 object-cover"
                  />
                </Col>

                <Col md={9}>
                  <h2 className="font-bold">{ item.partner.companyName }</h2>

                  <small className="text-gray-500">
                    <span className="text-orange">
                      { category?.filter(find => find.id === item.categoryId)[0].name }</span> in { item.partner.city }
                  </small>

                  <p className="text-xs mt-1 text-gray-500">{ item.description.substring(0, 200) }...</p>
                </Col>

                <Col md={2} className="md:relative flex md:flex-col flex-row text-right md:mt-auto mt-3">
                  <button className="md:absolute md:-top-4 -top-7 md:right-0">
                    <Icon name="bookmark" color="text-orange" />
                  </button>

                  <div className="ml-3 md:m-0">
                    <small className="text-gray-500 text-xxs">starting from</small>

                    <div className="font-bold text-lg md:mb-3 leading-none">
                      { item.currencySymbol } { item.minimumPrice }
                    </div>
                  </div>

                  <Link
                    to={`/profile-provider/${item.id}`}
                    className="border-orange rounded text-orange inline-flex items-center border px-3 h-8 py-2 ml-auto mt-auto font-bold"
                  >
                    <span className="mr-3 text-xxs">VIEW SERVICE</span>
                    <Icon name="arrow-right" color="text-orange" size={ 6 } />
                  </Link>
                </Col>
              </Row>
            )) }
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
}

const mapStateToProps = state => ({
  serviceFilter: state.serviceFilter,
  countryList: state.globalState.countryList,
  categoryList: state.globalState.categoryList
});

export default connect(mapStateToProps)(ServiceProvider);
