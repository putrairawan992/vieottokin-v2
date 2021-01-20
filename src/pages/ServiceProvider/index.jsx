import React, { Fragment } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import { Link } from 'react-router-dom';
import Breadcrumb from 'lib/components/Breadcrumb';
import FilterSidebar from 'lib/components/FilterSidebar';
import Icon from 'icon';

const listProvider = [
  {
    logo: '/images/provider/hnt-law.png',
    name: 'H & T Law',
    category: 'Litigation',
    location: 'Ha Noi',
    text: 'Wild Goat Studio is an experienced team of developers, designers and stuntmen, committed to equitable tech. We put an obsessive team, clean code and battle-tested strategies to work in...',
    price: '¥ 7440'
  }, {
    logo: '/images/provider/trust.png',
    name: 'Trust',
    category: 'Litigation, Intelectual Property',
    location: 'Ha Noi',
    text: 'Wild Goat Studio is an experienced team of developers, designers and stuntmen, committed to equitable tech. We put an obsessive team, clean code and battle-tested strategies to work in...',
    price: '¥ 5677'
  }, {
    logo: '/images/provider/lopez-law.png',
    name: 'Lopez Law',
    category: 'Litigation',
    location: 'Ha Noi',
    text: 'Wild Goat Studio is an experienced team of developers, designers and stuntmen, committed to equitable tech. We put an obsessive team, clean code and battle-tested strategies to work in...',
    price: '¥ 9730'
  }, {
    logo: '/images/provider/spirit.png',
    name: 'Spirit of Justice',
    category: 'Litigation',
    location: 'Ha Noi',
    text: 'Wild Goat Studio is an experienced team of developers, designers and stuntmen, committed to equitable tech. We put an obsessive team, clean code and battle-tested strategies to work in...',
    price: '¥ 4560'
  }, {
    logo: '/images/provider/spirit.png',
    name: 'Spirit of Justice',
    category: 'Litigation',
    location: 'Ha Noi',
    text: 'Wild Goat Studio is an experienced team of developers, designers and stuntmen, committed to equitable tech. We put an obsessive team, clean code and battle-tested strategies to work in...',
    price: '¥ 4560'
  },
]

const ServiceProvider = () => {
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
              A total of <b>{ listProvider.length }</b> service providers
            </p>

            { listProvider.map((item, i) => (
              <Row
                className="bg-white shadow rounded-md px-3 py-4 border-l-4 border-softdrop border mb-5"
                key={ i }
              >
                <Col xs={2} md={1}>
                  <img src={ item.logo } alt={ item.name } className="rounded-full w-11 h-11 object-cover" />
                </Col>

                <Col md={9}>
                  <h2 className="font-bold">{ item.name }</h2>

                  <small className="text-gray-500">
                    <span className="text-orange">{ item.category }</span> in { item.location }
                  </small>

                  <p className="text-xs mt-1 text-gray-500">{ item.text }</p>
                </Col>

                <Col md={2} className="md:relative flex md:flex-col flex-row text-right md:mt-auto mt-3">
                  <button className="md:absolute md:-top-7 md:right-0">
                    <Icon name="bookmark" color="#f58120" />
                  </button>

                  <div className="ml-3 md:m-0">
                    <small className="text-gray-500 text-xxs">starting from</small>
                    <div className="font-bold text-lg md:mb-3 leading-none">{ item.price }</div>
                  </div>

                  <Link
                    to="/profile-provider"
                    className="border-orange rounded text-orange inline-flex items-center border px-3 h-8 py-2 ml-auto mt-auto font-bold"
                  >
                    <span className="mr-3 text-xxs">VIEW SERVICE</span>
                    <Icon name="arrow-right" color="#F58120" size={ 6 } />
                  </Link>
                </Col>
              </Row>
              ))
            }

          </Col>
        </Row>
      </Container>

    </Fragment>
  );
}

export default ServiceProvider;
