import React, { Fragment } from 'react';
import { Container, Row } from 'components/Grid';
import { Link } from 'react-router-dom';
import Breadcrumb from 'components/Breadcrumb';
import FilterSidebar from 'components/FilterSidebar';
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

const ListProvider = () => {
  return (
    <Fragment>
      <Breadcrumb base={[ 'Home' ]} current="Search" />

      <Container className="md:px-6 lg:px-8 py-20">
        <Row>
          <div className="w-3/12 px-8 border-r">
            <FilterSidebar />
          </div>

          <div className="w-9/12 px-8">
            <p className="text-gray-500 mb-5 text-sm">
              A total of <b>{ listProvider.length }</b> service providers
            </p>

            { listProvider.map((item, i) => (
                <div
                  className="bg-white shadow rounded-md px-5 py-4 flex justify-between border-l-4 border-softdrop border mb-5"
                  key={ i }
                >
                  <img src={ item.logo } alt={ item.name } className="rounded-full w-11 h-11" />

                  <div className="ml-4">
                    <h2 className="font-bold">{ item.name }</h2>

                    <small className="text-gray-500">
                      <span className="text-orange">{ item.category }</span> in { item.location }
                    </small>

                    <p className="text-xs mt-1 text-gray-500">{ item.text }</p>
                  </div>

                  <div className="w-4/12 text-right">
                    <small className="text-gray-500 text-xs">starting from</small>
                    <div className="font-bold text-lg mb-3 leading-none">{ item.price }</div>

                    <Link
                      to="/profile-provider"
                      className="border-orange rounded text-orange inline-flex items-center border px-3 py-2 ml-auto font-bold"
                    >
                      <span className="mr-3 text-xs">VIEW SERVICE</span>
                      <Icon name="arrow-row" color="#F58120" size={ 6 } />
                    </Link>
                  </div>
                </div>
              ))
            }

          </div>
        </Row>
      </Container>

    </Fragment>
  );
}

export default ListProvider;
